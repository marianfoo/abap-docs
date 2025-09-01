  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_statements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20WRITE%2C%20TO%2C%20ABAPWRITE_TO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

WRITE, TO

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_shortref.htm)

Syntax

WRITE *{*source*|*(source\_name)*}* TO destination
     [*\[*format\_options*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm).

Effect

The statement WRITE TO prepares the content of a source either using

-   [predefined formats](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwrite_formats.htm) or
-   explicit formatting options [format\_options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm)

as a character string and assigns the formatted content to the character-like data object destination.

The source field can be specified either statically or dynamically:

-   source
    
    The static specification is made directly as source. source is a [general expression position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") with the restriction that no [numeric literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumeric_literal_glosry.htm "Glossary Entry"), [arithmetic expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"), or [bit expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_expression_glosry.htm "Glossary Entry") can be specified directly.
    
-   source\_name
    
    The dynamic specification is made as the content of a parenthesized flat character-like data object source\_name, which must contain the name of the data object in question (non-case-sensitive). If the data object specified in source\_name does not exist, no assignment takes place and sy-subrc is set to 4. When evaluating source\_name, the same applies as to a dynamically specified [(name)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area_dynamic_dobj.htm) in the statement [ASSIGN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign.htm). The following can be specified for source\_name:
    
    -   Literal or constant
        
        If the data object source\_name is specified as a text field literal or as a constant, it can be evaluated statically, and the specified data object is recognized as the used object.
        
    -   Variable
        
        If the data object source\_name is specified as a variable, it is specified only dynamically and the content is not evaluated statically.
        
    
    When the statement is executed, name is not evaluated until runtime in both cases.
    

Only the data types grouped together under the [simple](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm) generic type can be used as source fields.

-   All [flat](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenflat_glosry.htm "Glossary Entry") data types; flat structures are handled like a data object of type c and can only contain character-like components.
-   The data types string and xstring
-   [enumerated types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenum_type_glosry.htm "Glossary Entry"); the name (maximum three characters) of the [enumerated constant](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") that defines the current [enumerated value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenumerated_value_glosry.htm "Glossary Entry") is used in uppercase letters.

The target field destination must be character-like and flat.

-   If the length of the target field destination is shorter than the length of the format of the data object either [predefined](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwrite_formats.htm) or specified using [format\_options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm), the output is truncated in formatting and in the subsequent assignment in accordance with a type-specific [truncation behavior](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwrite_truncations.htm).
-   If the available length is greater than the length required for formatting, the system places the result in the target field based on the predefined or user-defined alignment and fills the non-required space with blanks.

System Fields

sy-subrc

Meaning

0

The data object specified in source\_name was found and the assignment was performed.

4

The data object specified in source\_name was not found and the assignment was not performed.

If source is specified statically, sy-subrc is not set.

Hints

-   Although the statement WRITE TO does not send any data to an output medium, a [conversion exit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_exit_glosry.htm "Glossary Entry") may be executed.
-   The statement WRITE TO is mainly suited for formatting data for output purposes but not for further internal processing. For example, a field can no longer be handled as a numeric data object if the decimal separator is represented as a comma.
-   No numeric literals can be specified between WRITE and TO because the statement cannot be distinguished from a [WRITE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite-.htm) statement with a specified position.
-   The use of the WRITE TO statement can be replaced in most cases by [embedded expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates_expressions.htm) in [string templates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates.htm) of [string expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_string.htm).
-   It is possible to use string templates as source fields for the statement WRITE TO, but this is not usually recommended since both WRITE TO and string templates are used to format data and only a single method should be used. It is best to use string templates only.

Example

After the assignment, the variables date\_short and date\_long contain the current local date in the order specified in the user master record. The variable date\_long contains the separators defined there. The variable date\_short does not contain any separators because their length is not sufficient. The content of the variable date\_mask is formatted according to the formatting addition DD/MM/YY, for which their length is sufficient.

DATA: date\_long  TYPE c LENGTH 10,
      date\_short TYPE c LENGTH 8,
      date\_mask  TYPE c LENGTH 8.
WRITE sy-datlo TO: date\_short,
                   date\_long,
                   date\_mask DD/MM/YY.

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

If one of the following catchable exceptions is raised in the output of a decimal floating point number, the target field or output of the statement [WRITE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite-.htm) is filled using asterisks (\*).

CX\_SY\_WRITE\_INVALID\_STYLE

-   Cause: Incorrect output format for decimal floating point numbers with the STYLE addition.
    Runtime error: WRITE\_INVALID\_STYLE

CX\_SY\_CONVERSION\_NO\_NUMBER

-   Cause: Invalid format of the source field in the output of a decimal floating point number.
    Runtime error: CONVT\_NO\_NUMBER

CX\_SY\_CONVERSION\_OVERFLOW

-   Cause: Target field is too short to represent a decimal floating point number.
    Runtime error: CONVT\_OVERFLOW

Uncatchable Exceptions

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
[WRITE, Predefined Formats](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwrite_formats.htm)
[WRITE, format\_options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm)
[WRITE, Truncation Behavior](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwrite_truncations.htm)