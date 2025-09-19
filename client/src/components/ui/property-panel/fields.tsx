"use client";

import {
  Box,
  ColorPicker,
  Field,
  HStack,
  InputGroup,
  NativeSelect,
  NumberInput,
  parseColor,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

interface BaseFieldProps {
  label: string;
  name?: string;
  invalid?: boolean;
  disabled?: boolean;
}

type Options = Array<{ label: React.ReactNode; value: string }>;

interface SelectFieldProps extends BaseFieldProps {
  orientation?: "horizontal" | "vertical";
  options: Options;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  helperText?: string;
}

export function SelectField(props: Readonly<SelectFieldProps>) {
  const {
    name,
    label,
    invalid,
    disabled,
    defaultValue,
    onChange,
    value,
    options,
    orientation = "horizontal",
    helperText,
  } = props;
  return (
    <Field.Root orientation={orientation} invalid={invalid} disabled={disabled}>
      <Field.Label>{label}</Field.Label>
      <NativeSelect.Root
        size="sm"
        maxW={orientation === "horizontal" ? "var(--max-width)" : "auto"}
        flex="1"
      >
        <NativeSelect.Field
          name={name}
          value={value}
          defaultValue={defaultValue}
          onChange={e => onChange?.(e.currentTarget.value)}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
      {helperText && <Field.HelperText>{helperText}</Field.HelperText>}
    </Field.Root>
  );
}

interface NumberFieldWithUnitProps extends BaseFieldProps {
  unit?: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  min?: number;
  max?: number;
  step?: number;
}

export function NumberFieldWithUnit(props: Readonly<NumberFieldWithUnitProps>) {
  const {
    name,
    label,
    invalid,
    disabled,
    defaultValue,
    onChange,
    unit,
    min,
    max,
    step,
    value,
  } = props;

  return (
    <Field.Root orientation="horizontal" invalid={invalid} disabled={disabled}>
      <Field.Label>{label}</Field.Label>
      <HStack flex="1" maxW="var(--max-width)">
        <NumberInput.Root
          name={name}
          min={min}
          max={max}
          step={step}
          value={value}
          defaultValue={defaultValue}
          size="sm"
          flex="1"
          onValueChange={e => onChange?.(e.value)}
        >
          <NumberInput.Control />
          <Box
            pos="absolute"
            top="1.5"
            fontSize="sm"
            right="8"
            color="fg.muted"
          >
            {unit}
          </Box>
          <NumberInput.Input pe="14" />
        </NumberInput.Root>
      </HStack>
    </Field.Root>
  );
}

interface ColorFieldProps extends BaseFieldProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export function ColorField(props: Readonly<ColorFieldProps>) {
  const { name, label, invalid, disabled, defaultValue, onChange, value } =
    props;
  return (
    <Field.Root orientation="horizontal" invalid={invalid} disabled={disabled}>
      <Field.Label>{label}</Field.Label>
      <ColorPicker.Root
        name={name}
        value={value ? parseColor(value) : undefined}
        defaultValue={parseColor(defaultValue || "rgba(0,0,0,1)")}
        format="hsla"
        flex="1"
        maxW="var(--max-width)"
        size="sm"
        onValueChange={e => onChange?.(e.valueAsString)}
      >
        <ColorPicker.HiddenInput />
        <ColorPicker.Control>
          <InputGroup
            endElement={
              <ColorPicker.Trigger data-fit-content>
                <ColorPicker.ValueSwatch boxSize="4.5" />
              </ColorPicker.Trigger>
            }
          >
            <ColorPicker.Input />
          </InputGroup>
        </ColorPicker.Control>
        <ColorPicker.Positioner>
          <ColorPicker.Content colorPalette="gray">
            <ColorPicker.Area />
            <HStack>
              <ColorPicker.EyeDropper size="sm" variant="outline" />
              <ColorPicker.Sliders />
              <ColorPicker.ValueSwatch />
            </HStack>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </ColorPicker.Root>
    </Field.Root>
  );
}

interface ColorPaletteFieldProps extends BaseFieldProps {
  readonly orientation?: "horizontal" | "vertical";
  readonly value?: string;
  readonly defaultValue?: string;
  readonly onChange?: (value: string) => void;
  readonly helperText?: string;
  readonly swatches: ReadonlyArray<{
    readonly name: string;
    readonly color: string;
    readonly displayName: string;
  }>;
}

export function ColorPaletteField(props: Readonly<ColorPaletteFieldProps>) {
  const {
    label,
    invalid,
    disabled,
    onChange,
    value,
    orientation = "horizontal",
    helperText,
    swatches,
  } = props;

  // Find the current swatch based on the value
  const currentSwatch =
    swatches.find(swatch => swatch.name === value) || swatches[0];

  return (
    <Field.Root orientation={orientation} invalid={invalid} disabled={disabled}>
      <Field.Label>{label}</Field.Label>
      <Box
        flex="1"
        maxW={orientation === "horizontal" ? "var(--max-width)" : "auto"}
      >
        {/* Current Selection Display */}
        <Box
          p="3"
          rounded="md"
          bg="bg.subtle"
          borderWidth="1px"
          borderColor="border.muted"
          mb="3"
        >
          <HStack>
            <Box
              boxSize="5"
              rounded="md"
              bg={currentSwatch?.color}
              borderWidth="1px"
              borderColor="border.subtle"
            />
            <Text fontSize="sm" color="fg.default" fontWeight="medium">
              {currentSwatch?.displayName || "Select Color"}
            </Text>
          </HStack>
        </Box>

        {/* Color Swatches Grid */}
        <SimpleGrid
          columns={5}
          gap="2"
          p="3"
          rounded="md"
          bg="bg.surface"
          borderWidth="1px"
          borderColor="border.muted"
        >
          {swatches.map(swatch => (
            <Box
              key={swatch.name}
              as="button"
              boxSize="8"
              rounded="md"
              bg={swatch.color}
              borderWidth="2px"
              borderColor={swatch.name === value ? "white" : "transparent"}
              outline={swatch.name === value ? "2px solid" : "none"}
              outlineColor={
                swatch.name === value ? "border.accent" : "transparent"
              }
              _hover={{
                transform: "scale(1.1)",
                borderColor: "white",
                outline: "2px solid",
                outlineColor: "border.accent",
              }}
              _focus={{
                transform: "scale(1.1)",
                borderColor: "white",
                outline: "2px solid",
                outlineColor: "border.accent",
              }}
              transition="all 0.2s"
              cursor="pointer"
              position="relative"
              onClick={() => onChange?.(swatch.name)}
              title={swatch.displayName}
              _disabled={{ opacity: 0.5, cursor: "not-allowed" }}
              data-disabled={disabled}
            >
              {swatch.name === value && (
                <Box
                  position="absolute"
                  inset="0"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  fontWeight="bold"
                  fontSize="sm"
                  textShadow="0 1px 2px rgba(0,0,0,0.7)"
                >
                  ✓
                </Box>
              )}
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      {helperText && <Field.HelperText>{helperText}</Field.HelperText>}
    </Field.Root>
  );
}
