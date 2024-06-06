import * as React from 'react';

import {
  AlignCenterOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
  BoldOutlined,
  FileImageOutlined,
  HighlightOutlined,
  ItalicOutlined,
  LinkOutlined,
  OrderedListOutlined,
  RedoOutlined,
  StrikethroughOutlined,
  TableOutlined,
  UnderlineOutlined,
  UndoOutlined,
  UnorderedListOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { Color } from '@tiptap/extension-color';
import type { ColorOptions } from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import type { HighlightOptions } from '@tiptap/extension-highlight';
import Image from '@tiptap/extension-image';
import type { ImageOptions } from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import type { LinkOptions } from '@tiptap/extension-link';
import ListItem from '@tiptap/extension-list-item';
import Placeholder from '@tiptap/extension-placeholder';
import type { PlaceholderOptions } from '@tiptap/extension-placeholder';
import Table from '@tiptap/extension-table';
import type { TableOptions } from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import type { TableCellOptions } from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import type { TableHeaderOptions } from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import type { TableRowOptions } from '@tiptap/extension-table-row';
import TextAlign from '@tiptap/extension-text-align';
import type { TextAlignOptions } from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import type { TextStyleOptions } from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import type { UnderlineOptions } from '@tiptap/extension-underline';
import Youtube from '@tiptap/extension-youtube';
import type { YoutubeOptions } from '@tiptap/extension-youtube';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import type { StarterKitOptions } from '@tiptap/starter-kit';
import { useSafeState, useUpdateEffect } from 'ahooks';
import {
  Button,
  ColorPicker,
  Divider,
  Flex,
  Input,
  Popconfirm,
  Tooltip,
  Upload,
} from 'antd';
import ImgCrop from 'antd-img-crop';

import {
  H1Icon,
  H2Icon,
  H3Icon,
  H4Icon,
  H5Icon,
  H6Icon,
  InlineCodeIcon,
  TableColumnInsertIcon,
  TableColumnRemoveIcon,
  TableRemoveIcon,
  TableRowInsertIcon,
  TableRowRemoveIcon,
  TextIcon,
} from '@/components';
import { cn, generateBase64 } from '@/utils';

type EditorToolbarProps = {
  editor: NonNullable<ReturnType<typeof useEditor>>;
};

const EditorToolbar = ({ editor }: EditorToolbarProps) => {
  const defaultHref = editor.getAttributes('link').href as string | undefined;
  const defaultVideo = editor.getAttributes('youtube').src as
    | string
    | undefined;
  const [href, setHref] = useSafeState(defaultHref);
  const [video, setVideo] = useSafeState(defaultVideo);

  const defaultButtonProps: React.ComponentPropsWithoutRef<typeof Button> = {
    type: 'text',
    size: 'small',
    shape: 'circle',
  };

  useUpdateEffect(() => {
    setHref(defaultHref);
  }, [defaultHref]);

  const editorFocused = () => editor.chain().focus();
  const editorPossibled = () => editor.can();
  const editorChainPossibled = () => editorPossibled().chain().focus();

  return (
    <Flex wrap='wrap' align='center' className='border-b p-3'>
      <Tooltip title='عنوان اول'>
        <Button
          icon={<H1Icon />}
          className={cn(
            editor.isActive('heading', { level: 1 })
              ? '!bg-zinc-200'
              : '!text-zinc-400',
          )}
          onClick={() => editorFocused().toggleHeading({ level: 1 }).run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Tooltip title='عنوان دوم'>
        <Button
          icon={<H2Icon />}
          className={cn(
            editor.isActive('heading', { level: 2 })
              ? '!bg-zinc-200'
              : '!text-zinc-400',
          )}
          onClick={() => editorFocused().toggleHeading({ level: 2 }).run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Tooltip title='عنوان سوم'>
        <Button
          icon={<H3Icon />}
          className={cn(
            editor.isActive('heading', { level: 3 })
              ? '!bg-zinc-200'
              : '!text-zinc-400',
          )}
          onClick={() => editorFocused().toggleHeading({ level: 3 }).run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Tooltip title='عنوان چهارم'>
        <Button
          icon={<H4Icon />}
          className={cn(
            editor.isActive('heading', { level: 4 })
              ? '!bg-zinc-200'
              : '!text-zinc-400',
          )}
          onClick={() => editorFocused().toggleHeading({ level: 4 }).run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Tooltip title='عنوان پنجم'>
        <Button
          icon={<H5Icon />}
          className={cn(
            editor.isActive('heading', { level: 5 })
              ? '!bg-zinc-200'
              : '!text-zinc-400',
          )}
          onClick={() => editorFocused().toggleHeading({ level: 5 }).run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Tooltip title='عنوان ششم'>
        <Button
          icon={<H6Icon />}
          className={cn(
            editor.isActive('heading', { level: 6 })
              ? '!bg-zinc-200'
              : '!text-zinc-400',
          )}
          onClick={() => editorFocused().toggleHeading({ level: 6 }).run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Tooltip title='پاراگراف'>
        <Button
          icon={<TextIcon />}
          className={cn(
            editor.isActive('paragraph') ? '!bg-zinc-200' : '!text-zinc-400',
          )}
          onClick={() => editorFocused().setParagraph().run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Divider type='vertical' />

      <Tooltip title='رنگ ها'>
        <ColorPicker
          size='small'
          className='!shadow-none'
          defaultValue='var(--ant-color-text-base)'
          value={editor.getAttributes('textStyle').color}
          onChange={(_, hex) => editorFocused().setColor(hex).run()}
        />
      </Tooltip>
      <Tooltip title='پررنگ'>
        <Button
          icon={<BoldOutlined />}
          className={cn(
            editor.isActive('bold') ? '!bg-zinc-200' : '!text-zinc-400',
          )}
          disabled={!editorChainPossibled().toggleBold().run()}
          onClick={() => editorFocused().toggleBold().run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Tooltip title='مورب'>
        <Button
          icon={<ItalicOutlined />}
          className={cn(
            editor.isActive('italic') ? '!bg-zinc-200' : '!text-zinc-400',
          )}
          disabled={!editorChainPossibled().toggleItalic().run()}
          onClick={() => editorFocused().toggleItalic().run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Tooltip title='زیرخط'>
        <Button
          icon={<UnderlineOutlined />}
          className={cn(
            editor.isActive('underline') ? '!bg-zinc-200' : '!text-zinc-400',
          )}
          disabled={!editorChainPossibled().toggleUnderline().run()}
          onClick={() => editorFocused().toggleUnderline().run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Tooltip title='نادیده'>
        <Button
          icon={<StrikethroughOutlined />}
          className={cn(
            editor.isActive('strike') ? '!bg-zinc-200' : '!text-zinc-400',
          )}
          disabled={!editorChainPossibled().toggleStrike().run()}
          onClick={() => editorFocused().toggleStrike().run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Tooltip title='برجسته'>
        <Button
          icon={<HighlightOutlined />}
          className={cn(
            editor.isActive('highlight') ? '!bg-zinc-200' : '!text-zinc-400',
          )}
          disabled={!editorChainPossibled().toggleHighlight().run()}
          onClick={() => editorFocused().toggleHighlight().run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Divider type='vertical' />

      <Tooltip title='جدول'>
        <Button
          icon={<TableOutlined />}
          className={cn(
            editor.isActive('table') ? '!bg-zinc-200' : '!text-zinc-400',
          )}
          onClick={() =>
            editorFocused()
              .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
              .run()
          }
          {...defaultButtonProps}
        />
      </Tooltip>
      <Tooltip title='افزودن ستون'>
        <Button
          icon={<TableColumnInsertIcon />}
          disabled={!editorPossibled().addColumnAfter()}
          onClick={() => editorFocused().addColumnAfter().run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Tooltip title='حذف ستون'>
        <Button
          icon={<TableColumnRemoveIcon />}
          disabled={!editorPossibled().deleteColumn()}
          onClick={() => editorFocused().deleteColumn().run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Tooltip title='افزودن خط'>
        <Button
          icon={<TableRowInsertIcon />}
          disabled={!editorPossibled().addRowAfter()}
          onClick={() => editorFocused().addRowAfter().run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Tooltip title='حذف خط'>
        <Button
          icon={<TableRowRemoveIcon />}
          disabled={!editorPossibled().deleteRow()}
          onClick={() => editorFocused().deleteRow().run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Tooltip title='حذف جدول'>
        <Button
          icon={<TableRemoveIcon />}
          disabled={!editorPossibled().deleteTable()}
          onClick={() => editorFocused().deleteTable().run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Divider type='vertical' />

      <Tooltip title='لیست نامرتب'>
        <Button
          icon={<UnorderedListOutlined />}
          className={cn(
            editor.isActive('bulletList') ? '!bg-zinc-200' : '!text-zinc-400',
          )}
          onClick={() => editorFocused().toggleBulletList().run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Tooltip title='لیست مرتب'>
        <Button
          icon={<OrderedListOutlined />}
          className={cn(
            editor.isActive('orderedList') ? '!bg-zinc-200' : '!text-zinc-400',
          )}
          onClick={() => editorFocused().toggleOrderedList().run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Divider type='vertical' />

      <Popconfirm
        placement='bottom'
        icon={null}
        title={
          <Input
            placeholder='آدرس ویدیو'
            value={video}
            onChange={({ target: { value } }) => setVideo(value)}
          />
        }
        showCancel={false}
        okText='افزودن'
        okButtonProps={{
          className: '!ms-0 w-full !text-sm',
        }}
        onConfirm={() => {
          if (video) {
            editor.commands.setYoutubeVideo({
              src: video,
              width: 640,
              height: 480,
            });
          }
        }}
      >
        <Tooltip title='ویدیو'>
          <Button
            icon={<YoutubeOutlined style={{ marginInlineStart: 2 }} />}
            {...defaultButtonProps}
          />
        </Tooltip>
      </Popconfirm>
      <Popconfirm
        placement='bottom'
        icon={null}
        title={
          <Input
            placeholder='آدرس لینک'
            value={href}
            onChange={({ target: { value } }) => setHref(value)}
          />
        }
        showCancel={false}
        okText='افزودن'
        okButtonProps={{
          className: '!ms-0 w-full !text-sm',
        }}
        onConfirm={() => {
          if (href === '') {
            editorFocused().extendMarkRange('link').unsetLink().run();
          }
          if (href) {
            editorFocused().extendMarkRange('link').setLink({ href }).run();
          }
        }}
      >
        <Tooltip title='لینک'>
          <Button icon={<LinkOutlined />} {...defaultButtonProps} />
        </Tooltip>
      </Popconfirm>
      <ImgCrop rotationSlider aspectSlider modalTitle='ویرایش عکس' quality={1}>
        <Upload
          showUploadList={false}
          onChange={async ({ file: { originFileObj } }) => {
            if (originFileObj) {
              const src = await generateBase64(originFileObj);
              editorFocused().setImage({ src }).run();
            }
          }}
        >
          <Tooltip title='تصویر'>
            <Button icon={<FileImageOutlined />} {...defaultButtonProps} />
          </Tooltip>
        </Upload>
      </ImgCrop>
      <Divider type='vertical' />

      <Tooltip title='راست چین'>
        <Button
          icon={<AlignRightOutlined />}
          className={cn(
            editor.isActive({ textAlign: 'right' })
              ? '!bg-zinc-200'
              : '!text-zinc-400',
          )}
          onClick={() => editorFocused().setTextAlign('right').run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Tooltip title='وسط چین'>
        <Button
          icon={<AlignCenterOutlined />}
          className={cn(
            editor.isActive({ textAlign: 'center' })
              ? '!bg-zinc-200'
              : '!text-zinc-400',
          )}
          onClick={() => editorFocused().setTextAlign('center').run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Tooltip title='چپ چین'>
        <Button
          icon={<AlignLeftOutlined />}
          className={cn(
            editor.isActive({ textAlign: 'left' })
              ? '!bg-zinc-200'
              : '!text-zinc-400',
          )}
          onClick={() => editorFocused().setTextAlign('left').run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Divider type='vertical' />

      <Tooltip title='کد'>
        <Button
          icon={<InlineCodeIcon />}
          className={cn(
            editor.isActive('codeBlock') ? '!bg-zinc-200' : '!text-zinc-400',
          )}
          onClick={() => editorFocused().toggleCodeBlock().run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Tooltip title='ناانجام'>
        <Button
          icon={<UndoOutlined />}
          disabled={!editorChainPossibled().undo().run()}
          onClick={() => editorFocused().undo().run()}
          {...defaultButtonProps}
        />
      </Tooltip>
      <Tooltip title='بازانجام'>
        <Button
          icon={<RedoOutlined />}
          disabled={!editorChainPossibled().redo().run()}
          onClick={() => editorFocused().redo().run()}
          {...defaultButtonProps}
        />
      </Tooltip>
    </Flex>
  );
};

type ExtensionsOptions = {
  starterKit: Partial<StarterKitOptions>;
  textStyle: Partial<TextStyleOptions>;
  textAlign: Partial<TextAlignOptions>;
  color: Partial<ColorOptions>;
  underline: Partial<UnderlineOptions>;
  highlight: Partial<HighlightOptions>;
  table: Partial<TableOptions>;
  tableRow: Partial<TableRowOptions>;
  tableHeader: Partial<TableHeaderOptions>;
  tableCell: Partial<TableCellOptions>;
  youtube: Partial<YoutubeOptions>;
  link: Partial<LinkOptions>;
  image: Partial<ImageOptions>;
  placeholder: Partial<PlaceholderOptions>;
};

type Options = Parameters<typeof useEditor>[0] &
  Record<'extensionsOptions', Partial<ExtensionsOptions>>;

type DependencyList = Parameters<typeof useEditor>[1];

type RichTextEditorProps = React.ComponentPropsWithoutRef<'div'> &
  Partial<Record<'options', Partial<Options>> & Record<'deps', DependencyList>>;

const RichTextEditor = React.forwardRef<
  React.ElementRef<'div'>,
  RichTextEditorProps
>(
  (
    {
      options = {
        extensionsOptions: {},
      },
      deps,
      className,
      ...props
    },
    ref,
  ) => {
    const {
      extensionsOptions = {
        starterKit: {},
        textStyle: {},
        textAlign: {},
        color: {},
        underline: {},
        highlight: {},
        table: {},
        tableRow: {},
        tableHeader: {},
        tableCell: {},
        youtube: {},
        link: {},
        image: {},
        placeholder: {},
      },
      ...editorOptions
    } = options;
    const {
      starterKit,
      textStyle,
      textAlign = {
        defaultAlignment: 'right',
        types: ['heading', 'paragraph'],
      },
      color = { types: [TextStyle.name, ListItem.name] },
      underline,
      highlight,
      table = {
        resizable: true,
      },
      tableRow,
      tableHeader,
      tableCell,
      youtube = {
        controls: false,
      },
      link = {
        openOnClick: false,
        autolink: true,
      },
      image,
      placeholder,
    } = extensionsOptions;
    const {
      extensions = [
        StarterKit.configure(starterKit),
        TextStyle.configure(textStyle),
        TextAlign.configure(textAlign),
        Color.configure(color),
        Underline.configure(underline),
        Highlight.configure(highlight),
        Table.configure(table),
        TableRow.configure(tableRow),
        TableHeader.configure(tableHeader),
        TableCell.configure(tableCell),
        Youtube.configure(youtube),
        Link.configure(link),
        Image.configure(image),
        Placeholder.configure(placeholder),
      ],
      editorProps = {
        attributes: {
          class:
            'h-96 min-h-28 resize-y overflow-y-auto p-3 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--ant-color-primary-hover)]',
        },
      },
      ...otherEditorOptions
    } = editorOptions;
    const opts: typeof editorOptions = {
      extensions,
      editorProps,
      ...otherEditorOptions,
    };

    const editor = useEditor(opts, deps);

    if (!editor) return null;

    return (
      <div ref={ref} className={cn('rounded border', className)} {...props}>
        <EditorToolbar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    );
  },
);
RichTextEditor.displayName = 'RichTextEditor';

export { RichTextEditor };
