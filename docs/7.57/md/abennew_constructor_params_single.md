  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [NEW, Instance Operator](javascript:call_link\('abenconstructor_expression_new.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: NEW, Single Value for All Data Types, ABENNEW_CONSTRUCTOR_PARAMS_SINGLE, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

NEW, Single Value for All Data Types

Syntax

... NEW dtype*|*#( *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]* dobj ) ...

Effect

If dtype is a non-generic elementary data type, a structured type, a table type, or a reference type or # is used for a type like this, a single data object dobj can be specified as a unnamed argument that is convertible to or from data type dtype. dobj is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). The value of dobj is assigned to the created anonymous data object. The assignment is made in accordance with the applicable [assignment rules](javascript:call_link\('abenconversion_rules.htm'\)). Optionally, a LET expression [let\_exp](javascript:call_link\('abaplet.htm'\)) can be specified in front of the data object to define local helper fields.

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

DATA dref\_tab LIKE TABLE OF REF TO t100 WITH EMPTY KEY.
DATA wa TYPE t100.
SELECT \*
       FROM t100
       WHERE sprsl = @sy-langu
       INTO @wa.
  APPEND NEW #( wa ) TO dref\_tab.
ENDSELECT.