  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning References](javascript:call_link\('abenreference_assignments.htm'\)) →  [Setting Field Symbols](javascript:call_link\('abenset_field_symbols.htm'\)) →  [ASSIGN](javascript:call_link\('abapassign.htm'\)) →  [ASSIGN - mem\_area](javascript:call_link\('abapassign_mem_area.htm'\)) → 

ASSIGN - dynamic\_access

[Quick Reference](javascript:call_link\('abapassign_shortref.htm'\))

Syntax

... *{* cref->(attr\_name) *}*
  *|* *{* iref->(attr\_name) *}*
  *|* *{* (class\_name)=>(attr\_name) *}*
  *|* *{* (class\_name)=>attr *}*
  *|* *{* class=>(attr\_name) *}* ...

Alternatives:

[1\. ... cref->(attr\_name)](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... iref->(attr\_name)](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... (class\_name)=>(attr\_name)](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... (class\_name)=>attr](#!ABAP_ALTERNATIVE_4@4@)
[5\. ... class=>(attr\_name)](#!ABAP_ALTERNATIVE_5@5@)

Effect

These alternatives to specifying the memory area [mem\_area](javascript:call_link\('abapassign_mem_area.htm'\)) of the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)) dynamically are designed especially for dynamic access to attributes of classes (Dynamic Access).

In an inline declaration of the field symbol using [FIELD-SYMBOL(<fs>)](javascript:call_link\('abenfield-symbol_inline.htm'\)), its typing is performed with the generic type data.

In these variants, the statement ASSIGN sets the return code sy-subrc. If the assignment is successful, sy-subrc is set to 0; if not, it is set to 4. If the assignment is not successful, the field symbol keeps its previous state. It is therefore not enough just to evaluate the [predicate expression](javascript:call_link\('abenpredicate_expression_glosry.htm'\) "Glossary Entry") [<fs> IS ASSIGNED](javascript:call_link\('abenlogexp_assigned.htm'\)); sy-subrc needs to be checked as well.

Note

Field symbols to which instance attributes (or parts of instance attributes) are assigned have a memory-preserving affect on the associated object.

Alternative 1

... cref->(attr\_name)

Effect

This form may be used for all visible attributes of objects. cref can be any [class reference variable](javascript:call_link\('abenclass_reference_variabl_glosry.htm'\) "Glossary Entry") pointing to an object which contains the attribute specified in a character-like field attr\_name. The system searches for the attribute first in the [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") of cref and then in the [dynamic type](javascript:call_link\('abendynamic_type_glosry.htm'\) "Glossary Entry").

The attribute name does not need to be specified in uppercase letters. It can contain offsets/lengths, structure component selectors, object component selectors, and class component selectors, to assign parts of the attribute (or referenced objects of the attribute).

Example

Dynamic assignment of an object attribute to a field symbol. The assignment is made via an object reference variable of the static type of the root class object, which can reference any object.

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

This form may be used for all visible interface attributes of objects. iref can be any [interface reference variable](javascript:call_link\('abeninterface_ref_variable_glosry.htm'\) "Glossary Entry") pointing to an object which contains the interface attributes specified in a character-like field attr\_name. The search for this method takes place only in the [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") of iref.

The attribute name does not need to be specified in uppercase letters. It can contain offsets/lengths, structure component selectors, object component selectors, and class component selectors, in order to assign parts of the attribute (or referenced objects of the attribute).

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

... (class\_name)=>(attr\_name)

Alternative 4

... (class\_name)=>attr

Alternative 5

... class=>(attr\_name)

Effect

These forms may be used for all visible static attributes. Both the class and the attribute can be specified dynamically. It is also possible to specify the attribute attr and the class class directly.

If the alternatives with dynamically specified class (class\_name) are used, the system first searches for the class and then for the attribute. If the static specification class is used, the system searches for the attribute in the existing class.

The content of attr\_name and class\_name does not have to be in uppercase letters. attr\_name can contain offsets/lengths, structure component selectors, object component selectors, and class component selectors, to assign parts of attributes or referenced objects of attributes. If the class name is specified dynamically and the attribute directly, no offsets/lengths or object component selectors can be specified behind the attribute.

Note

If, in class\_name, a class of another program is specified using an [absolute type name](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry"), this program is loaded into a new [additional program group](javascript:call_link\('abenadditional_prog_group_glosry.htm'\) "Glossary Entry") or into the current [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry"), depending on the program type (if not already loaded). If required, the [program constructor](javascript:call_link\('abenprogram_constructor_glosry.htm'\) "Glossary Entry") is also executed.

Example

Various dynamic assignments of a static class attribute to field symbols.

DATA(class\_name) = \`cl\_abap\_browser\`.
DATA(attr\_name) =  \`xlarge\`.
ASSIGN (class\_name)=>(attr\_name) TO FIELD-SYMBOL(<fs1>).
ASSIGN (class\_name)=>xlarge TO FIELD-SYMBOL(<fs2>).
ASSIGN cl\_abap\_browser=>(attr\_name) TO FIELD-SYMBOL(<fs3>).
cl\_demo\_output=>display(
  |(class\_name)=>(attr\_name):    { <fs1> }\\n| &&
  |(class\_name)=>xlarge:         { <fs2> }\\n| &&
  |cl\_abap\_browser=>(attr\_name): { <fs3> }\\n| ).