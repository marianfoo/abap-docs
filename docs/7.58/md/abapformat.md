  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Create](javascript:call_link\('abenabap_lists.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FORMAT%2C%20ABAPFORMAT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FORMAT

[Short Reference](javascript:call_link\('abapformat_shortref.htm'\))

Syntax

FORMAT *\[*COLOR       *{**\[*\=*\]**{*color *\[*ON*\]**}**|*OFF*}**|**{*\= col*}**\]*
       *\[*INTENSIFIED *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]**\]*
       *\[*INVERSE     *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]**\]*
       *\[*HOTSPOT     *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]**\]*
       *\[*INPUT       *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]**\]*
       *\[*FRAMES      *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]**\]*
       *\[*RESET*\]*.

Additions:

[1\. ... COLOR *{**\[*\=*\]**{*color *\[*ON*\]**}**|*OFF*}**|**{*\= col*}*](#!ABAP_ADDITION_1@1@)
[2\. ... INTENSIFIED *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]*](#!ABAP_ADDITION_2@2@)
[3\. ... INVERSE *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]*](#!ABAP_ADDITION_3@3@)
[4\. ... HOTSPOT *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]*](#!ABAP_ADDITION_4@4@)
[5\. ... INPUT *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]*](#!ABAP_ADDITION_5@5@)
[6\. ... FRAMES *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]*](#!ABAP_ADDITION_6@6@)
[7\. ... RESET](#!ABAP_ADDITION_7@7@)

Effect

The settings defined using FORMAT apply from the current position of the [list cursor](javascript:call_link\('abenlist_cursor_glosry.htm'\) "Glossary Entry") for all of the following output statements ([WRITE](javascript:call_link\('abapwrite-.htm'\)) and, with restrictions, [ULINE](javascript:call_link\('abapuline.htm'\))) until they are redefined by a new FORMAT statement. Within a line, the areas between the individual output and between the start of the line and the first output are formatted. Blank lines created using [SKIP](javascript:call_link\('abapskip.htm'\)) are not formatted, however.

The individual additions change the associated setting only and leave the others unchanged, except for the addition RESET, which can change all settings.

At the start of the program, standard settings are defined for the settings that can be defined using FORMAT. These are set automatically for each [reporting event](javascript:call_link\('abenreporting_event_glosry.htm'\) "Glossary Entry") and [list event](javascript:call_link\('abenlist_event_glosry.htm'\) "Glossary Entry") (except for the attribute set by FRAMES). A table of the standard settings is in the description of the addition RESET.

For each individual WRITE output, the settings can be overridden using the same additions in the addition WRITE. The settings that are defined using FORMAT or the standard settings then apply again.

Hint

In addition to the statement FORMAT, [obsolete formats](javascript:call_link\('abenformat_obsolete.htm'\)) also exist that are replaced by FORMAT.

Addition 1   

... COLOR *{**\[*\=*\]**{*color *\[*ON*\]**}**|*OFF*}**|**{*\= col*}*

Effect

This addition sets the color of the output. If the attribute INVERSE is set to OFF (default setting), this sets the background color of the output. If the attribute INVERSE is set to ON, this sets the foreground color of the output.

The color can be specified either statically using color, or dynamically using col.

-   color expects syntax taken directly from the following table. ON does not need to be specified. The optional equal sign \= in front of color or OFF can be specified only if the addition ON is not specified.
-   A data object of type i, containing one of the values from the following table, can be specified for col. If col contains a different value, this is handled like the value 0. The equal sign \= must be used if the data object col is not specified directly as a number.

Syntax of color

Value in col

Color

*{* COL\_BACKGROUND *}*

0

GUI-dependent

*{* 1 *|* COL\_HEADING *}*

1

Gray-blue

*{* 2 *|* COL\_NORMAL *}*

2

Light gray

*{* 3 *|* COL\_TOTAL *}*

3

Yellow

*{* 4 *|* COL\_KEY *}*

4

Blue-green

*{* 5 *|* COL\_POSITIVE *}*

5

Green

*{* 6 *|* COL\_NEGATIVE *}*

6

Red

*{* 7 *|* COL\_GROUP *}*

7

Purple

The addition OFF has the same effect as COL\_BACKGROUND or the value 0 in col and is the default setting. In this setting, the color of the background corresponds to a list line of the background color of the GUI window.

The addition COLOR does not affect lines consisting of [line elements](javascript:call_link\('abenline_element_glosry.htm'\) "Glossary Entry"), or on GUI windows that are ready for input. The latter can be overridden by the other additions.

Addition 2   

... INTENSIFIED *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]*

Effect

This addition defines the intensity of the background color. flag expects a data object of type i. If ON is specified or if the content of flag is not equal to 0, an intensified background color is used (default setting). If OFF is specified or if the content of flag is equal to 0, a non-intensified background color is used. An exception to this is the background color COL\_BACKGROUND used by INTENSIFIED ON to control the foreground color. If none of ON, OFF, or flag are specified after INTENSIFIED, the addition ON is applied.

If the INPUT ON attribute is set at the same time, the addition INTENSIFIED OFF changes the foreground color of fields that are ready for input. If the INVERSE ON setting is made at the same time, the INTENSIFIED OFF setting is ignored (except for COL\_BACKGROUND).

Addition 3   

... INVERSE *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]*

Effect

This addition defines whether the addition COLOR sets the background color or the foreground color. flag expects a data object of type i. If ON is specified or the content of flag is not equal to 0, the foreground (the output) is displayed in the selected color. An exception to this is the COL\_BACKGROUND color, used to display the foreground in white. If OFF is specified or if the content of flag is equal to 0, the background is displayed in the selected color (default setting). If neither ON, OFF, nor flag are specified after INVERSE, the addition ON is applied.

If the attribute INPUT ON is set at the same time, the addition INVERSE ON changes the background and foreground color of fields that are ready for input.

Example

Demonstrates different combinations of the additions COLOR, INTENSIFIED, and INVERSE. The program SHOWCOLO produces a similar result.

DATA col TYPE i VALUE 0.
DO 8 TIMES.
  col = sy-index - 1.
  FORMAT COLOR = col.
  WRITE: /  col              COLOR OFF,
           'INTENSIFIED ON'  INTENSIFIED ON,
           'INTENSIFIED OFF' INTENSIFIED OFF,
           'INVERSE ON'      INVERSE ON.
ENDDO.

Addition 4   

... HOTSPOT *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]*

Effect

This addition affects the display of the mouse pointer and the function of the mouse in the list displayed on the window. flag expects a data object of type i. If ON is specified or if the content of flag is not equal to 0, it changes its appearance to a hand when the mouse pointer is positioned on a list area that is formatted accordingly (hotspot) and a single click has the same effect as a double-click, that is, selecting the function key F2. If OFF is specified or if the content of flag is equal to 0, the function of the mouse does not change (default setting). If none of ON, OFF, or flag are specified after HOTSPOT, the addition ON is applied.

If the attribute INPUT ON is set, the addition HOTSPOT ON is ignored and is also ignored by [line elements](javascript:call_link\('abenline_element_glosry.htm'\) "Glossary Entry").

Hint

By default, INPUT ON is set for a checkbox defined with [AS CHECKBOX](javascript:call_link\('abapwrite_list_elements.htm'\)) and the addition HOTSPOT ON is ignored. HOTSPOT ON does, however, affect a non-input-ready checkbox.

Example

Demonstration of a hotspot. Clicking the output once creates a details list.

START-OF-SELECTION.
  FORMAT HOTSPOT.
  WRITE 'Click me!' COLOR 5.
  FORMAT HOTSPOT OFF.
AT LINE-SELECTION.
  WRITE 'Yeah!' COLOR 3.

Addition 5   

... INPUT *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]*

Effect

This addition makes list areas ready for input. flag expects a data object of type i. If ON is specified or the content of flag is not equal to 0, the relevant list area is displayed with a different foreground and background color than the rest of the list, and the user can overwrite the output. The screen cursor is positioned in the first field that is ready for input. If OFF is specified or the content of flag is equal to 0, the output is not made ready for input (default setting). If none of ON, OFF, or flag are specified after INPUT, the addition ON is applied.

Within an area that is ready for input, icons are displayed empty and symbols are displayed as characters according to the [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry"). [Line elements](javascript:call_link\('abenline_element_glosry.htm'\) "Glossary Entry") are not made ready for input. In list areas that are ready for input, however, the characters \- and |, are not converted into line elements and are not displayed as ready for input. In particular, the latter also applies to the statement ULINE.

The width of the list area that is ready for input is defined by the [output length](javascript:call_link\('abenwrite_output_length.htm'\)). If the display of content from the list buffer in a list area that is ready for input results in truncation, the indicator is placed outside the area. The number of characters that can be entered is limited by the output length. The content cannot be moved. The number of characters that can be entered depends on the space that the individual characters require.

The entries made by the user are stored in the list buffer and can be evaluated during a list event. If characters were truncated in the list, then they will also be lost in the list buffer.

Hint

If a list line contains an input field with only blanks, it is not displayed if the statement SET BLANK LINES ON was not executed beforehand.

Example

Displays a field that is ready for input and evaluates it in the event AT LINE-SELECTION. The evaluation is performed only if the user clicks the hotspot below the line that is ready for input.

DATA: input\_field TYPE c LENGTH 100,
      line\_num TYPE i.
START-OF-SELECTION.
  WRITE 'Input text:'.
  SET BLANK LINES ON.
  FORMAT INPUT.
  WRITE / input\_field.
  FORMAT INPUT OFF.
  WRITE / '>>> OK <<<' COLOR 5 HOTSPOT.
AT LINE-SELECTION.
  IF sy-lisel = '>>> OK <<<'.
    line\_num = sy-lilli - 1.
    READ LINE line\_num FIELD VALUE input\_field.
    WRITE:   'The input was:',
           /  input\_field.
  ENDIF.

Addition 6   

... FRAMES *\[**{*ON*|*OFF*}**|**{*\= flag*}**\]*

Effect

This addition defines whether the \- and | characters are converted to [line elements](javascript:call_link\('abenline_element_glosry.htm'\) "Glossary Entry"). flag expects a data object of type i. If ON is specified or if the content of flag is not equal to 0, the characters are converted in the affected list area (default setting). If OFF is specified or if the content of flag is not equal to 0, the characters are not converted. If none of ON, OFF, or flag are specified after FRAMES, the addition ON is applied.

In the FRAMES ON setting, the following points apply:

-   If the \- and | characters are displayed directly next to each other or above each other, they are replaced by line elements, producing continuous lines (frames). This applies particularly to the output of lines using ULINE.
-   A solitary | character is always replaced by a vertical line.
-   Line elements that are displayed explicitly by the addition AS LINE are not replaced by other line elements and they do not affect adjacent \- and | characters.

In the FRAMES OFF setting, the \- and | characters are not converted into line elements. Line elements can be output explicitly using the addition AS LINE.

Hint

The addition FRAMES OFF is suitable for preventing unwanted results in spool lists. This applies particularly to lists that are intended for archiving.

Example

Output of a frame with the characters \- and | joined or not joined.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS frame.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FORMAT FRAMES ON.
    frame( ).
    FORMAT FRAMES OFF.
    frame( ).
  ENDMETHOD.
  METHOD frame.
    SKIP.
    WRITE: / '----',
           / '|  |',
           / '----'.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Addition 7   

... RESET

Effect

This addition sets all formatting settings for which the corresponding addition is not specified in the same FORMAT statement to the state OFF, apart from the setting of the addition FRAMES, which is set to ON. For settings whose addition is also specified, the addition RESET is ignored.

The following table shows the effect of RESET compared with the default settings (the setting when the program starts and the setting that is made for reporting and list events).

Addition

State After RESET

State After Program Start

State After Reporting Event or List Event

COLOR

OFF

OFF

OFF

INTENSIFIED

OFF

ON

ON

INVERSE

OFF

OFF

OFF

HOTSPOT

OFF

OFF

OFF

INPUT

OFF

OFF

OFF

FRAMES

ON

ON

No change

Example

This FORMAT statement creates the default setting after the program starts.

FORMAT RESET
       INTENSIFIED ON.

Continue
![Example](exa.gif "Example") [Lists - Possible Colors](javascript:call_link\('abenlist_format_color2_abexa.htm'\))