  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [NEW, Instance Operator](javascript:call_link\('abenconstructor_expression_new.htm'\)) → 

NEW, Initial Value for All Types

Syntax

... NEW dtype*|*class*|*#( ) ...

Effect

If no parameter is specified,

-   an anonymous data object retains its type-specific initial value,
-   no values are passed to the instance constructor of an object.

This is possible for every non-generic data type dtype. The instance constructor of a class class can either have only optional input parameters or no input parameters at all. The # symbol can stand for corresponding types.

Hint

If dtype or # stand for an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"), its initial value is created according to its [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry").

Example

After the following program section is executed, dref points to an empty internal table with the line type T100. Both constructor expressions have the same function.

TYPES t\_itab TYPE TABLE OF t100 WITH EMPTY KEY.
DATA dref TYPE REF TO t\_itab.
dref = NEW #( ).
dref = NEW t\_itab( ).