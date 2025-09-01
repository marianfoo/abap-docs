---
title: "Syntax"
description: |
  ...  cref->(attr_name)    iref->(attr_name)    (clif_name)=>(attr_name)    (clif_name)=>attr    clif=>(attr_name)  ... Alternatives: 1. ... cref->(attr_name)(#!ABAP_ALTERNATIVE_1@1@) 2. ... iref->(attr_name)(#!ABAP_ALTERNATIVE_2@2@) 3. ... (c
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassign_mem_area_dynamic_access.htm"
abapFile: "abapassign_mem_area_dynamic_access.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "field-symbol", "abapassign", "mem", "area", "dynamic", "access"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreference_assignments.htm) →  [Setting Field Symbols](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassign.htm) →  [ASSIGN, mem\_area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassign_mem_area.htm) → 

ASSIGN, dynamic\_access

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassign_shortref.htm)

Syntax

... *{* cref->(attr\_name) *}*
  *|* *{* iref->(attr\_name) *}*
  *|* *{* (clif\_name)=>(attr\_name) *}*
  *|* *{* (clif\_name)=>attr *}*
  *|* *{* clif=>(attr\_name) *}* ...

Alternatives:

[1\. ... cref->(attr\_name)](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... iref->(attr\_name)](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... (clif\_name)=>(attr\_name)](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... (clif\_name)=>attr](#!ABAP_ALTERNATIVE_4@4@)
[5\. ... clif=>(attr\_name)](#!ABAP_ALTERNATIVE_5@5@)

Effect

These alternatives to specifying the memory area [mem\_area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassign_mem_area.htm) of the statement [ASSIGN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassign.htm) dynamically are designed especially for dynamic access to attributes of classes or interfaces (Dynamic Access).

In an inline declaration of the field symbol using [FIELD-SYMBOL(<fs>)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfield-symbol_inline.htm), its typing is performed with the generic type data.

In these variants, the statement ASSIGN sets the return value sy-subrc. If the assignment is successful, sy-subrc is set to 0, otherwise to 4. If the assignment is not successful, the field symbol keeps its previous state. It is therefore not sufficient to evaluate the [predicate expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [<fs> IS ASSIGNED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_assigned.htm) and sy-subrc needs to be checked as well.

Hint

Field symbols to which instance attributes or parts of instance attributes are assigned have a memory-preserving effect on the associated object.

Alternative 1

... cref->(attr\_name)

Effect

This form is possible for all visible attributes of objects. cref can be any [class reference variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_reference_variabl_glosry.htm "Glossary Entry") that points to an object that contains the attribute specified in a character-like field attr\_name. The system searches for the attribute first in the [static type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_type_glosry.htm "Glossary Entry") of cref and then in the [dynamic type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynamic_type_glosry.htm "Glossary Entry").

The attribute name does not have to be in uppercase letters. It can contain offsets/lengths, structure component selectors, object component selectors, and class component selectors, in order to assign parts of the attribute (or referenced objects of the attribute).

Example

Dynamic assignment of an object attribute of an object to a field symbol. The assignment is made via an object reference variable of the static type of the root class object, which can point to any object.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    METHODS meth IMPORTING oref TYPE REF TO object
                           attr TYPE string.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD meth.
    ASSIGN oref->(attr) TO FIELD-SYMBOL(<attr>).
    ...
  ENDMETHOD.
ENDCLASS.

Alternative 2

... iref->(attr\_name)

Effect

This form may be used for all visible attributes of objects. iref can be any [interface reference variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninterface_ref_variable_glosry.htm "Glossary Entry") that points to an object that contains the interface attribute specified in a character-like field attr\_name. The search for this method takes place only in the [static type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_type_glosry.htm "Glossary Entry") of iref.

The attribute name does not have to be in uppercase letters. It can contain offsets/lengths, structure component selectors, object component selectors, and class component selectors, in order to assign parts of the attribute (or referenced objects of the attribute).

Example

Dynamic assignment of an object attribute to a field symbol. The assignment is made via an interface reference variable.

INTERFACE intf.
  CONSTANTS attr TYPE string VALUE \`interface attribute\`.
ENDINTERFACE.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    INTERFACES intf.
ENDCLASS.
DATA iref TYPE REF TO intf.
iref = NEW demo( ).
ASSIGN iref->('attr') TO FIELD-SYMBOL(<fs>).
cl\_demo\_output=>display( <fs> ).

Alternative 3

... (clif\_name)=>(attr\_name)

Alternative 4

... (clif\_name)=>attr

Effect

These forms may be used for all visible static attributes. Classes and interfaces and also attributes can be specified dynamically in character-like fields clif\_name or attr\_name. The attribute attr can, however, also be specified directly. The system searches for the class or interface first and then the attribute.

The content of attr\_name and clif\_name does not have to be in uppercase letters. attr\_name can contain offsets/lengths, structure component selectors, object component selectors, and class component selectors, in order to assign parts of the attribute or referenced objects of the attribute. Here, no offsets/lengths or object component selectors can be specified after a directly specified attribute attr.

Hint

If a class of another program is specified in clif\_name using an [absolute type name](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabsolute_typename_glosry.htm "Glossary Entry"), this program is loaded into a new [additional program group](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadditional_prog_group_glosry.htm "Glossary Entry") or into the current [program group](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_group_glosry.htm "Glossary Entry"), depending on the program type, if it has not yet been loaded. If required, the [program constructor](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_constructor_glosry.htm "Glossary Entry") is also executed in this case.

Alternative 5

... clif=>(attr\_name)

Effect

This form may be used for all visible static attributes. The class or interfaces is specified directly, and the attribute specified dynamically in a character-like field attr\_name. The system searches for the attribute in the specified class or interface.

The content of attr\_name does not have to be in uppercase letters. attr\_name can contain offsets/lengths, structure component selectors, object component selectors, and class component selectors, in order to assign parts of the attribute or referenced objects of the attribute.

Example

Different dynamic assignments of a static class attribute to field symbols.

DATA(clif\_name) = \`cl\_abap\_browser\`.
DATA(attr\_name) =  \`xlarge\`.
ASSIGN (clif\_name)=>(attr\_name) TO FIELD-SYMBOL(<fs1>).
ASSIGN (clif\_name)=>xlarge TO FIELD-SYMBOL(<fs2>).
ASSIGN cl\_abap\_browser=>(attr\_name) TO FIELD-SYMBOL(<fs3>).
cl\_demo\_output=>display(
  |(clif\_name)=>(attr\_name):    { <fs1> }\\n| &&
  |(clif\_name)=>xlarge:         { <fs2> }\\n| &&
  |cl\_abap\_browser=>(attr\_name): { <fs3> }\\n| ).