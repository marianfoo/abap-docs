  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CREATE OBJECT oref, ABAPCREATE_OBJECT_IMPLICIT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

CREATE OBJECT oref

[Short Reference](javascript:call_link\('abapcreate_object_shortref.htm'\))

Syntax

CREATE OBJECT oref *\[* [area\_handle](javascript:call_link\('abapcreate_object_area_handle.htm'\))*\]* *\[* [parameter\_list](javascript:call_link\('abapcreate_object_parameters.htm'\))*\]*.

Effect

If the addition TYPE is not specified, the object reference variable oref must be a class reference variable. An instance of the class is created that is the static type of the object reference variable. The static type of the class reference variable must not be an [abstract](javascript:call_link\('abenabstract_glosry.htm'\) "Glossary Entry") class, and in particular not the root class object.

Hint

If the character # is used in an operand position with the operand type of a class reference variable, the [instance operator](javascript:call_link\('abeninstance_operator_glosry.htm'\) "Glossary Entry") [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) works like the statement CREATE DATA dref.

Example

Creation of an instance of a class cls by implicitly referring to the static type of the reference variables.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    DATA attr type string VALUE 'Object'.
ENDCLASS.
DATA oref TYPE REF TO cls.
CREATE OBJECT oref.
cl\_demo\_output=>display( oref->attr ).