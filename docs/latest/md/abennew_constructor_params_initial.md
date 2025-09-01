  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [NEW, Instance Operator](javascript:call_link\('abenconstructor_expression_new.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20NEW%2C%20Initial%20Value%20for%20All%20Types%2C%20ABENNEW_CONSTRUCTOR_PARAMS_INITIAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

NEW, Initial Value for All Types

Syntax

... NEW dtype*|*class*|*#( ) ...

Effect

If no parameter is specified,

-   an anonymous data object retains its type-specific initial value,
-   no values are passed to the instance constructor of an object.

This is possible for every non-generic data type dtype. The instance constructor of a class class can either have only optional input parameters or no input parameters at all. The # symbol can stand for corresponding types.

Hint

If dtype or # stand for an [enumerated type](javascript:call_link\('abenenum_type_glosry.htm'\) "Glossary Entry"), its initial value is created according to its [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry").

Example

After the following program section is executed, dref points to an empty internal table with the line type T100. Both constructor expressions have the same function.

TYPES t\_itab TYPE TABLE OF t100 WITH EMPTY KEY.
DATA dref TYPE REF TO t\_itab.
dref = NEW #( ).
dref = NEW t\_itab( ).