  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencreate_objects.htm) →  [NEW, Instance Operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_new.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20NEW%2C%20Single%20Value%20for%20All%20Data%20Types%2C%20ABENNEW_CONSTRUCTOR_PARAMS_SINGLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

NEW, Single Value for All Data Types

Syntax

... NEW dtype*|*#( *\[*[let\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaplet.htm)*\]* dobj ) ...

Effect

If dtype is a non-generic elementary data type, a structured type, a table type, or a reference type or # is used for a type like this, a single data object dobj can be specified as a unnamed argument that is convertible to or from data type dtype. dobj is a [general expression position](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). The value of dobj is assigned to the created anonymous data object. The assignment is made in accordance with the applicable [assignment rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_rules.htm). Optionally, a LET expression [let\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaplet.htm) can be specified in front of the data object to define local helper fields.

Hints

-   In particular, an expression specified for dobj can be a constructor expression itself or contain a constructor expression.
-   When a constructor expression is assigned to a reference variable using NEW, the original reference is available in the entire expression in the target variable. The target variable is not overwritten until the expression is completed.

Example

Construction of an anonymous data object of the type string, whose value is determined using a string expression.

DATA input TYPE c LENGTH 10 VALUE 'World'.
cl\_demo\_input=>request( CHANGING field = input ).
DATA dref TYPE REF TO string.
dref =  NEW string( \`Hello \` && input && \`!\` ).
cl\_demo\_output=>display( dref->\* ).

Example

For each line read, a structured anonymous data object is created in a SELECT loop, to which the content of the line is assigned. The object is created in the general expression position of the statement APPEND and the created data reference is appended directly to an internal table with the appropriate line type. The result is a table that references all new anonymous data objects.

DATA dref\_tab TYPE TABLE OF REF TO t100 WITH EMPTY KEY.
DATA wa TYPE t100.
SELECT \*
       FROM t100
       WHERE sprsl = @sy-langu
       INTO @wa.
  APPEND NEW #( wa ) TO dref\_tab.
ENDSELECT.