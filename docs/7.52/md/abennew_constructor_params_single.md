  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [NEW - Instance Operator](javascript:call_link\('abenconstructor_expression_new.htm'\)) → 

NEW - Single Value for All Data Types

Syntax

... NEW dtype*|*#( *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]* dobj ) ...

Effect

If dtype is a non-generic elementary data type, a structured type, a table type, or a reference type (or # stands a type like this), a single data object dobj can be specified as a unnamed argument (the data object either has the type dtype or is convertible to this type). dobj is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). The value of dobj is assigned to the new anonymous data object. The assignment is made in accordance with the applicable [assignment rules](javascript:call_link\('abenconversion_rules.htm'\)). An optional LET expression [let\_exp](javascript:call_link\('abaplet.htm'\)) can be specified before the data object to define local helper fields.

Notes

-   An expression specified for dobj can, more specifically, itself be a constructor expression or contain a constructor expression.

-   When a constructor expression is assigned to a reference variable using NEW, the original reference is made available in the entire expression in the target variable. The target variable is not overwritten until the expression is closed.

Example

Constructs an anonymous data object of the type string, whose value is determined using a string expression.

DATA input TYPE c LENGTH 10 VALUE 'World'.
cl\_demo\_input=>request( CHANGING field = input ).
DATA dref TYPE REF TO string.
dref =  NEW string( \`Hello \` && input && \`!\` ).
cl\_demo\_output=>display( dref->\* ).

Example

For each row read, a structured anonymous data object is created in a SELECT loop. The content of the row is assigned to this data object. The object is created in the general expression position of the statement APPEND and the new data reference is appended directly to an internal table with the appropriate row type. The result is a table that references all new anonymous data objects.

DATA dref\_tab LIKE TABLE OF REF TO t100 WITH EMPTY KEY.
DATA wa TYPE t100.
SELECT \*
       FROM t100
       WHERE sprsl = @sy-langu
       INTO @wa.
  APPEND NEW #( wa ) TO dref\_tab.
ENDSELECT.