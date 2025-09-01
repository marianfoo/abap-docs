  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) → 

CREATE DATA dref

[Short Reference](javascript:call_link\('abapcreate_data_shortref.htm'\))

Syntax

CREATE DATA dref *\[*[area\_handle](javascript:call_link\('abapcreate_data_area_handle.htm'\))*\]*.

Effect

Creation of an anonymous data object with an implicit type. If neither of the additions TYPE or LIKE are specified, the data reference variable dref must be completely typed. The data object is then created with the static data type of the data reference variable.

Hint

When the character # is used in an operand position with the operand type of a data reference variable, the [instance operator](javascript:call_link\('abeninstance_operator_glosry.htm'\) "Glossary Entry") [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) works like the statement CREATE DATA dref.

Example

Creation of an anonymous data object of the type SCARR from the ABAP Dictionary. The type is implicitly determined using the static data type of the data reference variable.

DATA dref TYPE REF TO scarr.
CREATE DATA dref.
SELECT SINGLE \*
       FROM scarr
       WHERE carrid = 'LH'
       INTO @dref->\*.
cl\_demo\_output=>display( |{ dref->carrid }, { dref->carrname }| ).

Executable Example

[Creating Data Objects with Implicit Type](javascript:call_link\('abencreate_data_implicit_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Creating Data Objects with Implicit Type](javascript:call_link\('abencreate_data_implicit_abexa.htm'\))