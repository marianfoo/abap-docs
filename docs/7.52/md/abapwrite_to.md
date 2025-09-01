  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Statements for Character String and Byte String Processing](javascript:call_link\('abenstring_processing_statements.htm'\)) → 

WRITE - TO

[Quick Reference](javascript:call_link\('abapwrite_to_shortref.htm'\))

Syntax

WRITE *{*source*|*(source\_name)*}* TO destination
                             [*\[*format\_options*\]*](javascript:call_link\('abapwrite_to_options.htm'\)).

Effect

The statement WRITE TO prepares the content of a source either using

-   [predefined formats](javascript:call_link\('abenwrite_formats.htm'\)) or
    
-   explicit formatting options [format\_options](javascript:call_link\('abapwrite_to_options.htm'\))
    

as a character string and assigns the formatted content to the character-like data object destination.

The source field can be specified either statically or dynamically:

-   source
    

If static, the field is specified directly as source. source is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") with the restriction that no [numeric literals](javascript:call_link\('abennumeric_litetral_glosry.htm'\) "Glossary Entry"), [arithmetic expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry"), or [bit expressions](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") can be specified directly.

-   source\_name
    

If dynamic, the field is specified as the content of a parenthesized flat character-like data object source\_name, which must contain the name of the data object in question (non-case-sensitive). If the data object specified in source\_name does not exist, no assignment takes place and sy-subrc is set to 4. When evaluating source\_name, the same applies as to a dynamically specified [(name)](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)) in the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)). The following can be specified for source\_name:

-   Literal or constants
    If the data object source\_name is specified as a text field literal or as a constant, it can be evaluated statically and the specified data object is identified as the used object.

-   Variable
    If the data object source\_name is specified as a variable, it is specified only dynamically and the content is not evaluated statically.

When the statement is executed, name is not evaluated until runtime (in both cases).

Only the data types grouped together under the [simple](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) generic type can be used as source fields.

-   All [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") data types; flat structures are handled like a data object of type c and can only contain any character-like components.

-   The data types STRING and XSTRING

-   [enumeration types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"); the name (maximum three characters) of the [enumerated constant](javascript:call_link\('abenenumerated_constant_glosry.htm'\) "Glossary Entry") is used in uppercase letters, which defines the the current [enumerated value](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry").

The target field destination must be character-like and flat‎.

-   If the length of the target field destination is less than the length of the data object format either [predefined](javascript:call_link\('abenwrite_formats.htm'\)) or specified using [format\_options](javascript:call_link\('abapwrite_to_options.htm'\)), the output (when formatted and assigned) is shortened in accordance with a type-specific [cutoff behavior](javascript:call_link\('abenwrite_cutoffs.htm'\))
    
-   If the available length exceeds the length required for formatting, the system places the result in the target field based on the predefined or self-defined alignment and fills the non-required space with blanks.
    

System Fields

sy-subrc

Meaning

0

The data object specified in source\_name was found and the assignment was performed.

4

The data object specified in source\_name could not be found and the assignment was not performed.

If the static source is specified, sy-subrc is not set.

Notes

-   Although the statement WRITE TO does not send any data to an output medium, the system may execute a [conversion routine](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry").
    
-   The statement WRITE TO is primarily designed for formatting data for output purposes but not for further internal processing. For example, a field can no longer be handled as a numeric data object if the decimal separator is displayed as a comma.
    
-   No numeric literals can be specified between WRITE and TO. This is because, in this case, the statement cannot be distinguished from a [WRITE](javascript:call_link\('abapwrite-.htm'\)) statement with a specified position.
    
-   Use of the WRITE TO statement can be replaced in most cases by [embedded expressions](javascript:call_link\('abenstring_templates_expressions.htm'\)) in [string templates](javascript:call_link\('abenstring_templates.htm'\)) of [string expressions](javascript:call_link\('abapcompute_string.htm'\)).
    
-   It is possible to use string templates as source fields for the statement WRITE TO, but this is not usually recommended since both WRITE TO and string templates are used to format data and only a single method should be used. It is best to use string templates only.
    

Example

After the assignment, the variables date\_short and date\_long contain the current local date in the order specified in the user master record. The variable date\_long contains the separators defined there. The variable date\_short does not contain any separators since their length is not sufficient. The content of the variable date\_mask is formatted according to the formatting addition DD/MM/YY, for which their length is sufficient.

DATA: date\_long  TYPE c LENGTH 10,
      date\_short TYPE c LENGTH 8,
      date\_mask  TYPE c LENGTH 8.
WRITE sy-datlo TO: date\_short,
                   date\_long,
                   date\_mask DD/MM/YY.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_WRITE\_INVALID\_STYLE

-   Cause: Incorrect output format for decimal floating point numbers with the STYLE addition.
    Runtime error: WRITE\_INVALID\_STYLE
    

CX\_SY\_CONVERSION\_NO\_NUMBER

-   Cause: Invalid format of the source field in the output of a decimal floating point number.
    Runtime error: CONVT\_NO\_NUMBER
    

CX\_SY\_CONVERSION\_OVERFLOW

-   Cause: Target field is too short to display a decimal floating point number.
    Runtime error: CONVT\_OVERFLOW
    

Non-Handleable Exceptions

-   Cause: Negative length specified when offset/length is specified.
    Runtime error: WRITE\_TO\_LENGTH\_NEGATIVE
    
-   Cause: Negative offset specified when offset/length is specified.
    Runtime error: WRITE\_TO\_OFFSET\_NEGATIVE
    
-   Cause: Offset specified when offset/length is specified is greater than the field length.
    Runtime error: WRITE\_TO\_OFFSET\_TOOLARGE
    
-   Cause: CURRENCY parameter in WRITE does not have type c
    Runtime error: WRITE\_CURRENCY\_ILLEGAL\_TYPE
    
-   Cause: Rounding parameter less than -14
    Runtime error: WRITE\_ROUND\_TOO\_SMALL
    
-   Cause: UNIT parameter in WRITE does not have type c
    Runtime error: WRITE\_UNIT\_ILLEGAL\_TYPE
    
-   Cause: Incomplete rules for a time zone when using the addition TIME ZONE
    Runtime error: CONVERT\_TSTMP\_INCONSISTENT\_TAB
    

Continue
[WRITE - Predefined Formats](javascript:call_link\('abenwrite_formats.htm'\))
[WRITE - format\_options](javascript:call_link\('abapwrite_to_options.htm'\))
[WRITE - Cutoff Behavior](javascript:call_link\('abenwrite_cutoffs.htm'\))