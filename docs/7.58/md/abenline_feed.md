---
title: "Line Feeds in Character String Processing"
description: |
  A line feed (LF) is a control character(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencontrol_character_glosry.htm 'Glossary Entry') that positions the cursor when writing an output. Other of such control characters are return (CR from carriage return) or a tabulator. There are al
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenline_feed.htm"
abapFile: "abenline_feed.htm"
keywords: ["do", "while", "if", "try", "class", "data", "types", "field-symbol", "abenline", "feed"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_string.htm) →  [Character String and Byte String Processing, Overview](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_processing_oview.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Line%20Feeds%20in%20Character%20String%20Processing%2C%20ABENLINE_FEED%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Line Feeds in Character String Processing

A line feed (LF) is a [control character](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencontrol_character_glosry.htm "Glossary Entry") that positions the cursor when writing an output. Other of such control characters are return (CR from carriage return) or a tabulator. There are also combinations possible as CRLF for return plus line feed. If a character string contains control characters, it depends on the framework handling the character string how these are interpreted. While, for example, most notepad applications or text editors handle control characters as such, HTML or XML browsers handle control characters as whitespace characters.

-   [Control Characters in ABAP](#abenline-feed-1-------using-the-line-feed-character-in-abap---@ITOC@@ABENLINE_FEED_2)
    -   [Line Feed in Outputs](#abenline-feed-3-----------line-feed-in-files---@ITOC@@ABENLINE_FEED_4)
    -   [Line Feed in Classic Lists](#abenline-feed-5-----------replacing-line-feeds---@ITOC@@ABENLINE_FEED_6)

Control Characters in ABAP   

In ABAP, some control characters, especially the line feed character, can easily obtained by using the respective [string template](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_templates_separators.htm):

-   |...\\n...| for a linefeed among other content
-   |\\n| for a single line feed character

There are also constants for control characters in CL\_ABAP\_CHAR\_UTILITIES but those contain the same code as the respective string templates and there is no need to use them any more:

ASSERT cl\_abap\_char\_utilities=>newline        = |\\n|.
ASSERT cl\_abap\_char\_utilities=>horizontal\_tab = |\\t|.
ASSERT cl\_abap\_char\_utilities=>cr\_lf          = |\\r\\n|.

Example

The actual code of a control character can be determined (as for all characters) as follows:

FIELD-SYMBOLS <lf> TYPE x.
DATA lf type c LENGTH 1.
lf =  |\\n|.
ASSIGN lf to <lf> casting.
cl\_demo\_output=>display( <lf> ).

In an Unicode system this gives 0A00 which is the Unicode code for a line feed.

Example

In another way around, any control character of any code page can be included in a character string, here again the Unicode line feed:

CONSTANTS lf TYPE x LENGTH 4 VALUE '0A00'.
FIELD-SYMBOLS <lf> TYPE c.
ASSIGN lf TO <lf> CASTING.
cl\_demo\_output=>display( |aaa{ <lf> }bbb| ).

Using the Line Feed Character in ABAP   

The line feed character and other control characters are needed when sending character strings to frameworks that can handle them. Examples are different output media or writing to files.

Line Feed in Outputs   

The following are examples for line feeds in common output media.

Example

The text control of the [SAP GUI Control Framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencontrol_framework_glosry.htm "Glossary Entry") handles control characters.

cl\_demo\_text=>display\_string(
  |<html>| &&
  |  <body>| &&
  |    Hello!| &&
  |  </body>| &&
  |</html>| ).
cl\_demo\_text=>display\_string(
  |<html>\\n| &&
  |  <body>\\n| &&
  |    Hello!\\n| &&
  |  </body>\\n| &&
  |</html>\\n| ).

The first output is:

<html>  <body>    Hello!  </body></html>

The second output is:

<html>
  <body>
    Hello!
  </body>
</html>

Example

The first output of string handles its content as text and the line feeds are respected. The second output of string browses its content as an HTML file and the line feeds are handled as whitespace characters.

FINAL(string) =
    |<html>\\n| &&
    |  <body>\\n| &&
    |    Hello!\\n| &&
    |  </body>\\n| &&
    |</html>\\n|.
cl\_demo\_output=>new(
)->write( string
)->write\_html( string
)->display( ).

Line Feed in Files   

The following is an example for line feeds written to a file.

Example

Writing text to a text file of the frontend computer.

TYPES text TYPE TABLE OF string WITH EMPTY KEY.
DATA(text) = VALUE text( (
  |<html>\\r\\n| &&
  |  <body>\\r\\n| &&
  |    Hello!\\r\\n| &&
  |  </body>\\r\\n| &&
  |</html>\\r\\n| ) ).
cl\_gui\_frontend\_services=>gui\_download(
  EXPORTING filename = 'c:\\temp\\text.htm'
  CHANGING  data\_tab = text  ).

Opening the file with a notepad editor shows that the line feeds are handled there. Here, \\r\\n is used, since \\n is not sufficient in Windows. The [ABAP File Interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_files.htm) or the above used class CL\_GUI\_FRONTEND\_SERVICES offer further capabilities to handle control characters.

Line Feed in Classic Lists   

The line feed character and other control characters cannot be used in [classic lists](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclassic_list_glosry.htm "Glossary Entry"). The list processor does not recognize a control character and it does not handle it as a whitespace. It is an unknown character that is displayed as #. In classic lists, two (chained) [WRITE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite-.htm) statements are needed:

WRITE: |aaaa|, / |bbbbb|.

Replacing Line Feeds   

It is a common task to remove line feeds and other control characters from character strings that are received from outside of ABAP.

This can be easily done as follows:

REPLACE ALL OCCURRENCES OF |\\n| IN text\_with\_lf WITH \` \`.

Another pattern is

SPLIT text AT |\\r\\n| INTO TABLE DATA(text\_table).

For doing so, it must be checked If the code pages match. If the code page of the AS ABAP does not match the code page of the control characters in the text, field symbols must be used as shown above to represent the control characters of the code page of the text.