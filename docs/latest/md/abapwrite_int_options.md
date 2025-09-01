---
title: "Syntax"
description: |
  ... LEFT-JUSTIFIEDCENTEREDRIGHT-JUSTIFIED(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm) EXPONENT exp(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm) NO-GROUPING(https://help.sap.com/
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_int_options.htm"
abapFile: "abapwrite_int_options.htm"
keywords: ["do", "if", "try", "class", "abapwrite", "int", "options"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpro_list.htm) →  [Lists - Create](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_lists.htm) →  [WRITE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite-.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20WRITE%2C%20int_format_options%2C%20ABAPWRITE_INT_OPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

WRITE, int\_format\_options

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_shortref.htm)

Syntax

... *\[*[LEFT-JUSTIFIED*|*CENTERED*|*RIGHT-JUSTIFIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm)*\]*
    *\[*[EXPONENT exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm)*\]*
    *\[*[NO-GROUPING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm)*\]*
    *\[*[NO-SIGN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm)*\]*
    *\[*[NO-ZERO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm)*\]*
    *\[*[CURRENCY cur](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm)*\]*
    *\[*[DECIMALS dec](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm)*\]*
    *\[*[ROUND scale](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm)*\]*
    *\[*[UNIT unit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm)*\]*
    *\[*[ENVIRONMENT TIME FORMAT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm)*\]*
    *\[*[TIME ZONE tz](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm)*\]*
    *\[*[STYLE stl](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm)*\]*
    *\[*[USING *{* *{*NO EDIT MASK*}**|**{*EDIT MASK mask*}* *}*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm)*\]*
    *\[* [DD/MM/YY   *|* MM/DD/YY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm)
    *|* [DD/MM/YYYY *|* MM/DD/YYYY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm)
    *|* [DDMMYY     *|* MMDDYY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm)
    *|* [YYMMDD *\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm) ...

Effect

These formatting options override the [predefined formats](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwrite_formats.htm) of the statement [WRITE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite-.htm) for list output. The formatting result is adjusted to the [output length](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwrite_output_length.htm). If the system executes a [conversion exit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_exit_glosry.htm "Glossary Entry") during output, the other format\_options are ignored.

The formatting options are the same as for the statement [WRITE ... TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to.htm), with the following differences:

-   If the additions NO-SIGN, CURRENCY, DECIMALS, ROUND, UNIT are used with the length specification \* or \*\* after AT, they are applied first, and the output length is determined based on the result.
-   The [truncation behavior](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwrite_truncations.htm) is different when using the addition TIME ZONE for [time stamps in packed numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_stamps_packed.htm).
-   If USING EDIT MASK is used and the [output length](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwrite_output_length.htm) specified explicitly using len, the conversion exit is executed for the length specified, otherwise it is executed for the implicit output length. If \* or \*\* is specified for the output length, the corresponding rules are applied to the converted result.
-   If USING EDIT MASK is used and the output length \* specified, the system sets the exact length required in the list output. If characters of the edit mask are replaced by Unicode characters occupying more than one column on the list, the system extends the output length accordingly and fills the output in the list buffer with blanks.
-   If USING EDIT MASK is used and the output length \*\* is specified, double the length of the edit mask mask is used.
-   If USING EDIT MASK is used, a character \_ in the edit mask does not necessarily correspond to one column in the list display, since the space required for the display depends on the replacement Unicode character.
-   If DD/MM/YY ... is used and the output length specified using \* or \*\*, the length is set to the length of the specified edit mask (6, 8, or 10).