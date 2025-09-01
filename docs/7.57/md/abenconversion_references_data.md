  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning References](javascript:call_link\('abenreference_assignments.htm'\)) →  [Assigning Reference Variables](javascript:call_link\('abenset_references.htm'\)) →  [Assignment Rules for Reference Variables](javascript:call_link\('abenconversion_references.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Assignments Between Data Reference Variables, ABENCONVERSION_REFERENCES_DATA, 757%0D%
0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Assignments Between Data Reference Variables

Data reference variables are either completely typed or typed with the generic type data.

-   [Upcasts in Data References](#@@ITOC@@ABENCONVERSION_REFERENCES_DATA_1)
-   [Downcasts in Data References](#@@ITOC@@ABENCONVERSION_REFERENCES_DATA_2)

Upcasts in Data References   

An [upcast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") in data references is possible in the following cases:

-   The static types of the source variable and the target variable match according to the following rules:
    -   Both are elementary data types with identical [technical type properties](javascript:call_link\('abentechnical_type_prpt_glosry.htm'\) "Glossary Entry"), namely the built-in ABAP type, length, and number of decimal places. It is not important how the static types were defined.
    -   Both have an identical structured type. In the case of structured types, identical technical type properties are not sufficient, but the same structured type must have been used to define the static types.
    -   Both are table types with matching technical type properties, that is, line types, table category, and table key. In the case of non-structured line types, identical technical properties of the line type are sufficient. In the case of structured line types, both definitions must have been made with reference to the same structured type.
-   The static type of the source variable is completely typed, and the static type of the target variable is generic.

Hint

With respect to checks on static types, structured types behave like classes. Two differently structured types do not match, even if they consist of identical components.

Downcasts in Data References   

A [downcast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") in data references is only possible if the static type of the source variable is generic and that of the target variable is completely typed. The syntax check makes it impossible for static types of the source variable and the target variable to be completely typed, but not identical at the same time.

Example

The assignment from dref1 to dref2 is an upcast. The assignment from dref2 to dref1 is a downcast, which in the example below raises an exception. If the statement [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) had the addition TYPE i, the downcast would also have been successful.

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