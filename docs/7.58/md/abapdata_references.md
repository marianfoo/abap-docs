  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_declarations.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobjects_statements.htm) →  [DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DATA%2C%20REF%20TO%2C%20ABAPDATA_REFERENCES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DATA, REF TO

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_shortref.htm)

Syntax

DATA ref *{* *{*TYPE REF TO type*}*
         *|* *{*LIKE REF TO dobj*}* *}*
         [*\[*VALUE IS INITIAL*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_options.htm)
         [*\[*READ-ONLY*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_options.htm).

Effect

The addition REF TO declares a [reference variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_variable_glosry.htm "Glossary Entry") ref. The static type of the reference variable is specified after REF TO. The static type limits the set of objects to which ref can point. The dynamic type of a reference variable is the data type or the class to which it currently points. The static type is always more general or the same as the dynamic type (see also the conversion rule for reference variables).

The syntax and meaning of the additions TYPE and LIKE are the same as the definition of reference types in the section [TYPES - REF TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_references.htm), but here they are used to create a bound reference type.

Only IS INITIAL can be specified as a [start value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstart_value_glosry.htm "Glossary Entry") after the addition [VALUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_options.htm).

Hints

-   Reference variables are opaque, which means their content cannot be accessed directly. A reference consists of the address of an object and other administrative information.
-   A [reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_glosry.htm "Glossary Entry") in a reference variable is valid if it points to an object. In this case the predicate expression [IS BOUND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_bound.htm) is true. A non-initial reference can be invalid if it points to deleted objects. A [heap reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_reference_glosry.htm "Glossary Entry") that points to a line in an internal table can become invalid if the line is deleted. A [stack reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstack_reference_glosry.htm "Glossary Entry") can become invalid if the referenced data object is removed from the stack.

Example

In this example, an object reference oref and two data references dref1 and dref2 are declared. Both data reference variables are typed fully and can be dereferenced using the dereferencing operator \->\* in operand positions.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    DATA a1 TYPE i VALUE 1.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    DATA: oref  TYPE REF TO c1,
          dref1 LIKE REF TO oref,
          dref2 TYPE REF TO i.
    CREATE OBJECT oref.
    dref1 = REF #( oref ).
    CREATE DATA dref2.
    dref2->\* = dref1->\*->a1.
  ENDMETHOD.
ENDCLASS.