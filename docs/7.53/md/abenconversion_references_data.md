  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning References](javascript:call_link\('abenreference_assignments.htm'\)) →  [Setting Reference Variables](javascript:call_link\('abenset_references.htm'\)) →  [Assignment Rules for Reference Variables](javascript:call_link\('abenconversion_references.htm'\)) → 

Assignments Between Data Reference Variables

Data reference variables are either fully typed or typed with the generic type data.

-   [Up Casts in Data References](#abenconversion-references-data-1--------down-casts-in-data-references---@ITOC@@ABENCONVERSION_REFERENCES_DATA_2)

Up Casts in Data References

An [up cast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") in data references is possible in the following cases:

-   The static types of the source variable and the target variable match according to the following rules:

-   Both are elementary data types with identical [technical type attributes](javascript:call_link\('abentechnical_type_attr_glosry.htm'\) "Glossary Entry"), namely the built-in ABAP type, length, and number of decimal places. The way in which the static types were defined is not important.

-   Both have an identical structured type. In the case of structured types, identical technical type attributes are not sufficient and, in the definition of the static types, the same structured type must have been used.

-   Both are table types with matching technical type attributes, that is row types, table category, and table key. In the case of non-structured row types, identical technical attributes of the row type are sufficient. In the case of structured row types, both definitions must contain the same structured type.

-   The static type of the source variable is fully typed and the static type of the target variable is generic.

Note

With respect to checks on static types, structured types behave like classes. Two differently structured types do not match, even if they consist of identical components.

Down Casts in Data References

A [down cast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") in data references is only possible if the static type of the source variable is generic and that of the target variable is fully typed. The syntax check makes it impossible that the static types of the source variable and the target variable are both fully typed, but not identical.

Example

The assignment from dref1 to dref2 is an up cast. The assignment from dref2 to dref1 is a down cast, which in the example below raises an exception. If the statement [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) had the addition TYPE i, the down cast would also have been successful.

DATA: dref1 TYPE REF TO i,
      dref2 TYPE REF TO data.
CREATE DATA dref1.
dref2 = dref1.
CREATE DATA dref2 TYPE string.
TRY.
  dref1 ?= dref2.
  CATCH cx\_sy\_move\_cast\_error.
  ...
ENDTRY.