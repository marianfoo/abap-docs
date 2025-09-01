  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Create](javascript:call_link\('abenabap_lists.htm'\)) →  [WRITE](javascript:call_link\('abapwrite-.htm'\)) → 

WRITE, list\_elements

[Short Reference](javascript:call_link\('abapwrite_shortref.htm'\))

Syntax

... *{*AS CHECKBOX*}*
  *|* *{*AS ICON*}*
  *|* *{*AS SYMBOL*}*
  *|* *{*AS LINE*}* ...

Alternatives:

[1\. ... AS CHECKBOX](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... AS ICON](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... AS SYMBOL](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... AS LINE](#!ABAP_ALTERNATIVE_4@4@)

Effect

These additions are used to represent special list elements.

The data object dobj in the output must have certain properties. The additions cannot be used together. If they are used with the additions for [internal formats](javascript:call_link\('abapwrite_int_options.htm'\)) and [external formats](javascript:call_link\('abapwrite_ext_options.htm'\)), they can only be used to a limited extent.

Alternative 1

... AS CHECKBOX

Effect

The output of this addition is a single-character checkbox that is ready for input. dobj expects a character-like data type of length 1. If the first character in dobj is "X" or "x", the checkbox is shown as selected. If the first character is not "X" or "x", the checkbox is shown as empty. If dobj is an empty data object of the type string, the checkbox is not in the output.

The user can select and deselect the checkbox in the list displayed on the screen. If the user selects the checkbox, the first character of the assigned field in the list is set to "X". If the user deselects it, it is set to blank. The change is stored in the list buffer and can be evaluated during a list event.

If the addition AS CHECKBOX is used, no list output len is allowed after AT. Except for INPUT, NO-GAP, and UNDER, the other additions specified at the same time for [internal formats](javascript:call_link\('abapwrite_int_options.htm'\)) and [external formats](javascript:call_link\('abapwrite_ext_options.htm'\)) are ignored.

The addition AS CHECKBOX has the same effect as specifying the addition INPUT ON simultaneously. The standard settings or a format INPUT OFF set by a FORMAT statement are overridden for the current WRITE statement. To make the checkbox not ready for input, the addition INPUT OFF must be used simultaneously.

Hints

-   If a list line contains only a checkbox with a blank, it is displayed only if the statement SET BLANK LINES ON is executed beforehand.

-   By default, addition [HOTSPOT ON](javascript:call_link\('abapformat.htm'\)) has no effect on a checkbox. [HOTSPOT ON](javascript:call_link\('abapformat.htm'\)) only has an effect, if INPUT OFF is deactivated.
    

Example

Displays two checkbox fields and evaluates the user input in the event AT LINE-SELECTION.

REPORT test NO STANDARD PAGE HEADING.
DATA: check1 TYPE c LENGTH 1 VALUE 'X',
      check2 TYPE c LENGTH 1 VALUE ' '.
START-OF-SELECTION.
  WRITE: / check1 AS CHECKBOX, 'Checkbox 1',
         / check2 AS CHECKBOX, 'Checkbox 2'.
AT LINE-SELECTION.
  READ: LINE 1 FIELD VALUE check1,
        LINE 2 FIELD VALUE check2.

Alternative 2

... AS ICON

Effect

This addition produces icons. Be aware that not all icons are suitable for spool lists. dobj expects data objects of the type c whose initial characters can be interpreted as the internal ID of an icon by the runtime environment.

In the [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") ICON, a constant is declared for each icon that can be displayed. The names of the constants can be taken from the type pool or the output of the SHOWICON program. This program also shows the corresponding output length and whether an icon can be spooled or not.

If the content of dobj cannot be interpreted as an icon or the content is changed by concurrent use of other additions for [internal formats](javascript:call_link\('abapwrite_int_options.htm'\)) or [external formats](javascript:call_link\('abapwrite_ext_options.htm'\)), blanks are produced instead of icons.

Hints

-   None of the additions from the [internal formats](javascript:call_link\('abapwrite_int_options.htm'\)) and [external formats](javascript:call_link\('abapwrite_ext_options.htm'\)) are forbidden. When using these additions, care must be taken that the content of dobj can be interpreted as an icon.

-   The [output length](javascript:call_link\('abenwrite_output_length.htm'\)) is determined, as usual, either implicitly using the data type of dobj or by being specified explicitly. Characters in the output area that do not have the icon are set to blanks.

-   The program SHOWICON shows two internal IDs for each icon:

-   A two-digit hexadecimal number as the key.

-   A six-character string composed of uppercase letters and any underscores as the internal name.

If a character string that is output using WRITE has an internal ID of this type between two "@" characters at the start, this is represented as an icon in the list output, even without the addition AS ICON. This can lead to unwanted of icons and unexpected effects in terms of the output length. By default, the output length is determined by the length of the character string. However, this attribute can also be exploited, for example, to use icons at the start of [text symbols](javascript:call_link\('abentext_symbol_glosry.htm'\) "Glossary Entry"). IDs that are not at the start are not represented as icons.

Example

Displays a traffic light icon.

WRITE icon\_green\_light AS ICON.

Example

Displaying traffic light icons using their internal IDs (key and internal name). The IDs that are not at the start of the character string are not converted.

WRITE: / 'xxx', '@08@xxx    ', 'xxx@08@xxx'.
WRITE: / 'xxx', '@S\_TL\_G@xxx', 'xxx@S\_TL\_G@xxx'.

Alternative 3

... AS SYMBOL

Effect

This addition produces all the characters of the data object dobj as symbols. The [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") SYM declares constants with a length of 1 for each character that can be displayed as a symbol, and whose name reflects the meaning of the symbol. The names of the constants and the meaning and length of the symbols can be taken from the type pool or from the output of the program SHOWSYMB.

Hint

The [output length](javascript:call_link\('abenwrite_output_length.htm'\)) is determined, as usual, either implicitly using the data type of dobj or by being specified explicitly.

Example

Displays a hand symbol.

WRITE sym\_left\_hand AS SYMBOL.

Alternative 4

... AS LINE

Effect

This addition produces [line elements](javascript:call_link\('abenline_element_glosry.htm'\) "Glossary Entry") with the output length 1. Line elements are corners, crosses, lines, and T sections. dobj expects data objects of the type c whose content can be interpreted as line elements by the runtime environment. The [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") LINE declares the line element constants displayed in the following table.

Constant

Meaning

line\_space

Blank

line\_top\_left\_corner

Top left corner

line\_bottom\_left\_corner

Bottom left corner

line\_top\_right\_corner

Top right corner

line\_bottom\_right\_corner

Bottom right corner

line\_horizontal\_line

Horizontal line

line\_vertical\_line

Vertical line

line\_left\_middle\_corner

T section turned to the left

line\_right\_middle\_corner

T section turned to the right

line\_bottom\_middle\_corner

Reversed T section

line\_top\_middle\_corner

T section

line\_cross

Cross

If dobj has different content or the content is changed by concurrent use of other additions for [internal formats](javascript:call_link\('abapwrite_int_options.htm'\)), a blank is produced instead of a line element. The addition FRAMES OFF must not be specified simultaneously. The other additions for [external formats](javascript:call_link\('abapwrite_ext_options.htm'\)) and QUICKINFO are ignored in the output of line elements.

Hints

-   The characters "-" and "|" and produced using ULINE are [joined with each other](javascript:call_link\('abenwrite_lines.htm'\)) by default, if no other characters exist between them. Here the system replaces the characters by the above line elements. A standalone character "|" is always replaced by a vertical line. The "-" characters from sy-uline are always replaced by a horizontal line. The default behavior can be switched off using the addition [FRAMES OFF](javascript:call_link\('abapformat.htm'\)).

-   The addition AS LINE produces line elements in the exact way they are defined. Links are produced only where line elements actually meet each other. The system does not, however, create any automatic extensions between the characters "-" or "|" and line elements produced explicitly using AS LINE.
    

Example

Produces four adjoining rectangles.

WRITE: /10 line\_top\_left\_corner      AS LINE NO-GAP,
           line\_top\_middle\_corner    AS LINE NO-GAP,
           line\_top\_right\_corner     AS LINE,
       /10 line\_left\_middle\_corner   AS LINE NO-GAP,
           line\_cross                AS LINE NO-GAP,
           line\_right\_middle\_corner  AS LINE,
       /10 line\_bottom\_left\_corner   AS LINE NO-GAP,
           line\_bottom\_middle\_corner AS LINE NO-GAP,
           line\_bottom\_right\_corner  AS LINE.

Continue
![Example](exa.gif "Example") [Lists - Line Elements](javascript:call_link\('abenlist_line_elements_abexa.htm'\))