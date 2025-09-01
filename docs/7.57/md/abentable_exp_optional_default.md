  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_processing_expr_func.htm) →  [itab - Table Expressions (table\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expressions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: table_exp - default, ABENTABLE_EXP_OPTIONAL_DEFAULT, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

table\_exp - default

Syntax

... OPTIONAL*|**{*DEFAULT def*}* ...

Effect

Specifies a default value for table lines not found. If the [type of the result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_result.htm) of a table expression [table\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expressions.htm) is defined using the value operator VALUE or the reference operator REF, a default value can be specified after the table expression. If the line [itab\_line](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_itab_line.htm) specified in the table expression is not found, an exception of the class CX\_SY\_ITAB\_LINE\_NOT\_FOUND is not raised if a default value is specified and the result is determined by the default value instead.

-   OPTIONAL
    -   If VALUE is used, the default value is an initial data object with the data type of the table expression.
    -   If REF is used, the default value is an initial reference variable with the static type of the table expression.
-   DEFAULT
    -   If VALUE is used, the default value is specified using a data object def, which must be convertible to the data type of the table expression, If def is not compatible with the data type of the result of the expression, a conversion is made to this data type in accordance with the [conversion rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_rules.htm).
    -   If REF is used, the default value is specified using a reference variable def, whose static type is the data type of the table expression.

def is a [general expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").

If the argument of VALUE or REF is a single table expression, the default value applies to a single line in the corresponding table. If the argument is a [chaining](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_chaining.htm) of table expressions, the default value applies to the result of the chaining, that is, to its right end, which can express a structure component or a table line. A default value specified explicitly must match the result of the chaining accordingly. When a default value is specified for a chaining, the first exception for a missing line across the entire chaining is caught and the default value is returned as a result.

Hints

-   In addition to the functions [line\_exists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenline_exists_function.htm) and [line\_function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenline_index_function.htm), a characteristic default value specified for missing lines also enables the existence of lines to be checked without catching an exception or checking the return value after the statement ASSIGN.
-   A default value def specified after DEFAULT can itself be a table expression with default value. This enables alternative searches to be performed within an expression.
-   There is no operator for the default behavior of a table expression in which the [result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_result.htm) is usually a temporary field symbol, which means that no default value can be specified here.

Example

If no line of the specified key is found, the table expression returns a line in which the component carrid has the value NUL and all other components are initial.

DATA spfli\_tab TYPE SORTED TABLE OF spfli
               WITH UNIQUE KEY carrid connid.
SELECT \*
       FROM spfli
       INTO TABLE @spfli\_tab.
cl\_demo\_output=>display( VALUE #( spfli\_tab\[ carrid = '...'
                                             connid = '...' \]
                                  DEFAULT VALUE #( carrid = 'NUL' ) ) ).

Example

This example demonstrates the difference between specifying the default value for the value operator VALUE and the reference operator REF. Once this source code section is executed, var1 is an initial structure with the type SCARR and dref1 is an initial reference variable with the static type of this structure. The reference variable dref1 does not point to an initial structure. In the case of the default value specified using DEFAULT, a reference variable must be specified for REF. This is done here using the instance operator NEW, not VALUE.

DATA itab TYPE TABLE OF scarr WITH EMPTY KEY.
FINAL(var1) = VALUE #( itab\[ 1 \] OPTIONAL ).
FINAL(var2) = VALUE #( itab\[ 1 \] DEFAULT VALUE #( carrid   = 'XXX'
                                                 carrname = 'xxx' ) ).
FINAL(dref1) = REF #( itab\[ 1 \] OPTIONAL ).
FINAL(dref2) = REF #( itab\[ 1 \] DEFAULT NEW #( carrid   = 'XXX'
                                              carrname = 'xxx' ) ).
ASSERT var1  IS INITIAL.
ASSERT dref1 IS INITIAL.
ASSERT var2 = dref2->\*.

Executable Example

[Table Expressions, Default Value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_default_abexa.htm)

Continue
![Example](exa.gif "Example") [table\_exp - Default Value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_exp_default_abexa.htm)