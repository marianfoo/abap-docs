  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [DATA](javascript:call_link\('abapdata.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DATA, REF TO, ABAPDATA_REFERENCES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion for improvement:)

DATA, REF TO

[Short Reference](javascript:call_link\('abapdata_shortref.htm'\))

Syntax

DATA ref *{* *{*TYPE REF TO type*}*
         *|* *{*LIKE REF TO dobj*}* *}*
         [*\[*VALUE IS INITIAL*\]*](javascript:call_link\('abapdata_options.htm'\))
         [*\[*READ-ONLY*\]*](javascript:call_link\('abapdata_options.htm'\)).

Effect

The addition REF TO declares a [reference variable](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry") ref. The static type of the reference variable is specified after REF TO. The static type limits the set of objects to which ref can point. The dynamic type of a reference variable is the data type or the class to which it currently points. The static type is always more general or the same as the dynamic type (see also the conversion rule for reference variables).

The syntax and meaning of the additions TYPE and LIKE are the same as the definition of reference types in the section [TYPES - REF TO](javascript:call_link\('abaptypes_references.htm'\)), but here they are used to create a bound reference type.

Only IS INITIAL can be specified as a [start value](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") after the addition [VALUE](javascript:call_link\('abapdata_options.htm'\)).

Hints

-   Reference variables are opaque, which means their content cannot be accessed directly. A reference consists of the address of an object and other administrative information.
-   A [reference](javascript:call_link\('abenreference_glosry.htm'\) "Glossary Entry") in a reference variable is valid if it points to an object. In this case the predicate expression [IS BOUND](javascript:call_link\('abenlogexp_bound.htm'\)) is true. A non-initial reference can be invalid if it points to deleted objects. A [heap reference](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry") that points to a line in an internal table can become invalid if the line is deleted. A [stack reference](javascript:call_link\('abenstack_reference_glosry.htm'\) "Glossary Entry") can become invalid if the referenced data object is removed from the stack.

Example

In this example, an object reference oref and two data references dref1 and dref2 are declared. Both data reference variables are typed fully and can be dereferenced using the dereferencing operator \->\* in operand positions.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    DATA a1 TYPE i VALUE 1.
ENDCLASS.
DATA: oref  TYPE REF TO c1,
      dref1 LIKE REF TO oref,
      dref2 TYPE REF TO i.
CREATE OBJECT oref.
dref1 = REF #( oref ).
CREATE DATA dref2.
dref2->\* = dref1->\*->a1.