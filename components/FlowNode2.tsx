import { NodeProps } from '@xyflow/react';
import { clsx } from 'clsx';
import { useRef } from 'react';
import { Flex, Grid, RadioCards, Select, Slider, Switch, Text, TextArea, TextField } from '@radix-ui/themes';

export const SAMPLERS = ['Euler a', 'Euler', 'DDIM', 'DPM fast', 'DPM++ 2M Karras', 'LMS'];

export const STYLES = [
  'Случайный',
  'Реализм',
  'Импрессионизм',
  'Сюрреализм',
  'Абстракционизм',
  'Экспрессионизм',
  'Кубизм',
  'Футуризм',
  'Поп-арт',
  'Минимализм',
  'Барокко',
  'Ренессанс',
  'Готика',
  'Арт-деко',
  'Арт-нуво',
  'Баухаус',
  'Дадаизм',
  'Концептуальное искусство',
  'Урбанизм',
  'Аниме',
];

export const engineDefaultValue = 'flux';
export const qualityDefaultValue = 'standard';
export const dalleSizeDefaultValue = '1024x1024';
export const fluxSizeDefaultValue = 'square';

export function FlowNode2({ selected }: NodeProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const engine: string = 'dalle';

  return (
    <div
      className={clsx('p-5 nodrag bg-panel-translucent w-[450px]', { 'border border-1 border-cyan-7': selected })}
      ref={elementRef}
    >
      <Flex direction="column" width="100%" gap="4" mt="1">
        <Grid gap="1">
          <Text as="label">Генератор изображений</Text>
          <Select.Root
            // defaultValue={engineDefaultValue}
            value={engine}
          >
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="flux">Flux 1.1 Pro</Select.Item>
              <Select.Item value="sdxl_1024px">Stable Diffusion XL</Select.Item>
              <Select.Item value="dalle">DALL-E 3</Select.Item>
            </Select.Content>
          </Select.Root>
        </Grid>
        {engine === 'sdxl_1024px' && (
          <Grid gap="1">
            <Flex width="100%" mt="2" justify="end">
              <Text as="label" size="1">
                <Flex gap="2">
                  Быстрая генерация
                  <Switch color="orange" size="1" />
                </Flex>
              </Text>
            </Flex>
          </Grid>
        )}
        <Grid gap="1">
          <Text as="label">Стиль изображения</Text>
          <Select.Root>
            <Select.Trigger />
            <Select.Content>
              {STYLES.map((style) => (
                <Select.Item value={style} key={style}>
                  {style}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </Grid>
        <Grid gap="1">
          <Text as="label">Что должно быть на изображении</Text>
          <TextArea
            resize="vertical"
            placeholder="Опишите в свободной форме, что должно быть на изображении"
          ></TextArea>
          <textarea value="sadasd as das d"></textarea>
          <Text size="1" color="gray">
            Оставьте это поле пустым, если нет особых требований
          </Text>
        </Grid>
        {engine === 'dalle' && (
          <>
            <Grid gap="1">
              <Text as="label">Качество</Text>
              <Select.Root defaultValue={qualityDefaultValue}>
                <Select.Trigger />
                <Select.Content>
                  <Select.Item value="standard">Стандартное</Select.Item>
                  <Select.Item value="hd">Высокое</Select.Item>
                </Select.Content>
              </Select.Root>
            </Grid>
            <Grid gap="1">
              <Text as="label">Разрешение</Text>
              <RadioCards.Root
                columns="3"
                size="1"
                mt="1"
                // defaultValue={dalleSizeDefaultValue}
              >
                <RadioCards.Item value="1024x1024">
                  <Text size="1">1024x1024</Text>
                </RadioCards.Item>
                <RadioCards.Item value="1792x1024">
                  <Text size="1">1792x1024</Text>
                </RadioCards.Item>
                <RadioCards.Item value="1024x1792">
                  <Text size="1">1024x1792</Text>
                </RadioCards.Item>
              </RadioCards.Root>
            </Grid>
          </>
        )}
        {engine === 'sdxl_1024px' && (
          <>
            <Grid gap="1">
              <Text as="label">Чего не должно быть на изображении</Text>
              <TextArea
                resize="vertical"
                placeholder="Опишите в свободной форме, чего не должно быть на изображении"
              ></TextArea>
              <textarea>sadasd as das d</textarea>
              <Text size="1" color="gray">
                Оставьте это поле пустым, если нет особых требований
              </Text>
            </Grid>
            <>
              <Grid gap="1">
                <Text as="label">Кол-во шагов генерации</Text>
                <Flex width="100%" mt="1" align="center" gap="3">
                  <Slider size="1" value={[20]} max={50} min={20} />
                  <TextField.Root type="number" max={50} min={20} style={{ width: '60px' }}></TextField.Root>
                </Flex>
                <Text size="1" color="gray">
                  Больше шагов - выше качество
                </Text>
              </Grid>
              <Grid gap="1">
                <Text as="label">Точность</Text>
                <Flex width="100%" mt="1" align="center" gap="3">
                  <Slider size="1" step={0.1} />
                  <TextField.Root style={{ width: '60px' }}></TextField.Root>
                </Flex>
              </Grid>
              <Grid gap="1">
                <Text as="label">Сэмплер</Text>
                <Select.Root>
                  <Select.Trigger />
                  <Select.Content>
                    {SAMPLERS.map((s) => (
                      <Select.Item key={s} value={s}>
                        {s}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Root>
              </Grid>
            </>
          </>
        )}
        {engine === 'flux' && (
          <>
            <Grid gap="1">
              <Text as="label">Размер</Text>
              <RadioCards.Root
                columns="3"
                size="1"
                mt="1"
                // defaultValue={fluxSizeDefaultValue}
              >
                <RadioCards.Item value="square">
                  <Text size="1">512x512</Text>
                </RadioCards.Item>
                <RadioCards.Item value="square_hd">
                  <Text size="1">1024x1024</Text>
                </RadioCards.Item>
                <RadioCards.Item value="portrait_4_3">
                  <Text size="1">769x1024</Text>
                </RadioCards.Item>
                <RadioCards.Item value="portrait_9_16">
                  <Text size="1">576x1024</Text>
                </RadioCards.Item>
                <RadioCards.Item value="landscape_4_3">
                  <Text size="1">1024x768</Text>
                </RadioCards.Item>
                <RadioCards.Item value="landscape_16_9">
                  <Text size="1">1024x576</Text>
                </RadioCards.Item>
              </RadioCards.Root>
            </Grid>
          </>
        )}
      </Flex>
    </div>
  );
}
