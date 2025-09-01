  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Create](javascript:call_link\('abenabap_lists.htm'\)) →  [WRITE](javascript:call_link\('abapwrite-.htm'\)) → 

WRITE, int\_format\_options

[Short Reference](javascript:call_link\('abapwrite_shortref.htm'\))

Syntax

... *\[*[LEFT-JUSTIFIED*|*CENTERED*|*RIGHT-JUSTIFIED](javascript:call_link\('abapwrite_to_options.htm'\))*\]*
    *\[*[EXPONENT exp](javascript:call_link\('abapwrite_to_options.htm'\))*\]*
    *\[*[NO-GROUPING](javascript:call_link\('abapwrite_to_options.htm'\))*\]*
    *\[*[NO-SIGN](javascript:call_link\('abapwrite_to_options.htm'\))*\]*
    *\[*[NO-ZERO](javascript:call_link\('abapwrite_to_options.htm'\))*\]*
    *\[*[CURRENCY cur](javascript:call_link\('abapwrite_to_options.htm'\))*\]*
    *\[*[DECIMALS dec](javascript:call_link\('abapwrite_to_options.htm'\))*\]*
    *\[*[ROUND scale](javascript:call_link\('abapwrite_to_options.htm'\))*\]*
    *\[*[UNIT unit](javascript:call_link\('abapwrite_to_options.htm'\))*\]*
    *\[*[ENVIRONMENT TIME FORMAT](javascript:call_link\('abapwrite_to_options.htm'\))*\]*
    *\[*[TIME ZONE tz](javascript:call_link\('abapwrite_to_options.htm'\))*\]*
    *\[*[STYLE stl](javascript:call_link\('abapwrite_to_options.htm'\))*\]*
    *\[*[USING *{* *{*NO EDIT MASK*}**|**{*EDIT MASK mask*}* *}*](javascript:call_link\('abapwrite_to_options.htm'\))*\]*
    *\[* [DD/MM/YY   *|* MM/DD/YY](javascript:call_link\('abapwrite_to_options.htm'\))
    *|* [DD/MM/YYYY *|* MM/DD/YYYY](javascript:call_link\('abapwrite_to_options.htm'\))
    *|* [DDMMYY     *|* MMDDYY](javascript:call_link\('abapwrite_to_options.htm'\))
    *|* [YYMMDD *\]*](javascript:call_link\('abapwrite_to_options.htm'\)) ...

Effect

These formatting options override the [predefined formats](javascript:call_link\('abenwrite_formats.htm'\)) of the statement [WRITE](javascript:call_link\('abapwrite-.htm'\)) for list output. The formatting result is adjusted to the [output length](javascript:call_link\('abenwrite_output_length.htm'\)). If the system executes a [conversion routine](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry") during output, the other format\_options are ignored.

The formatting options are the same as for the statement [WRITE ... TO](javascript:call_link\('abapwrite_to.htm'\)), with the following differences:

-   If the additions NO-SIGN, CURRENCY, DECIMALS, ROUND, UNIT are used with the length specification \* or \*\* after AT, they are applied first and the output length is determined based on the result.
    

-   The [truncation behavior](javascript:call_link\('abenwrite_truncations.htm'\)) is different when using the addition TIME ZONE for [time stamps in packed numbers](javascript:call_link\('abentime_stamps_packed.htm'\)).
    

-   If USING EDIT MASK is used and the [output length](javascript:call_link\('abenwrite_output_length.htm'\)) specified explicitly using len, the conversion routine is executed for the length specified; in all other cases, it is executed for the implicit output length. If \* or \*\* is specified for the output length, the corresponding rules are applied to the converted result.
    

-   If USING EDIT MASK is used and the output length \* specified, the system sets the exact length required in the list output. If characters of the edit mask are replaced by Unicode characters occupying more than one column on the list, the system extends the output length accordingly and fills the output in the list buffer with blanks.
    

-   If USING EDIT MASK is used and the output length \*\* is specified, double the length of the edit mask mask is used.
    

-   If USING EDIT MASK is used, a character "\_" in the edit mask does not necessarily correspond to one column in the list display since the space required for the display depends on the replacement Unicode character.
    

-   If DD/MM/YY ... is used and the output length specified using \* or \*\*, the length is set to the length of the specified edit mask (6, 8, or 10).