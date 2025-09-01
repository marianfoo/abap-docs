  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencontrol_structures.htm) →  [Branches](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_branches.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CASE TYPE OF, ABAPCASE_TYPE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

CASE TYPE OF

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcase_type_shortref.htm)

Syntax

CASE TYPE OF oref.
  *\[*WHEN TYPE class*|*intf *\[*INTO target1*\]*.
    *\[*statement\_block1*\]**\]*
  *\[*WHEN TYPE class*|*intf *\[*INTO target2*\]*.
    *\[*statement\_block2*\]**\]*
  ...
  *\[*WHEN OTHERS.
    *\[*statement\_blockn*\]**\]*
ENDCASE.

Addition:

[... INTO target](#!ABAP_ONE_ADD@1@)

Effect

Special [case distinction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencase_distinction_glosry.htm "Glossary Entry") for [object reference variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry"). This form of a control structure introduced using [CASE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcase.htm) checks the [dynamic type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynamic_type_glosry.htm "Glossary Entry") of a non-initial object reference variable and the [static type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_type_glosry.htm "Glossary Entry") of an initial object reference variable oref. oref expects an object reference variable with the static type of a class or an interface. oref is a [general expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").

A class class or an interface intf that can be used at this position must be specified after WHEN TYPE. The first statement block statement\_block is executed for which the class class or the interface intf is more general than or equal to the following:

-   A dynamic type of a non-initial object reference variable oref
-   A static type of an initial object reference variable oref

If this does not apply to any class class or interface intf, the statement block is executed after WHEN OTHERS. No object type class or intf can be specified if it is known statically that it does not fulfill the condition.

Hints

-   A case distinction using CASE TYPE OF is another way of writing the following branch using [IF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapif.htm) and the predicate expression [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_instance_of.htm) and the corresponding rules and notes apply:
    
    IF oref [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_instance_of.htm) class*|*intf.
      *\[*statement\_block1*\]*
    ELSEIF oref [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_instance_of.htm) class*|*intf.
      *\[*statement\_block2*\]*
    ...
    ELSE.
      *\[*statement\_blockn*\]*
    ENDIF.
    
-   In the control structure, more specific classes class or interfaces intf must be listed before more general classes or interfaces to enable the associated statement block to be executed.

Example

Case distinction for the dynamic type of an object reference variable oref, from more specific to more general classes. In the case shown, c2 is the first class that fulfills the condition. oref can be assigned to ref2 with static type c2 without raising an exception.

CLASS c1 DEFINITION.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
ENDCLASS.
CLASS c3 DEFINITION INHERITING FROM c2.
ENDCLASS.
DATA oref TYPE REF TO object.
DATA: ref1 TYPE REF TO c1,
      ref2 TYPE REF TO c2,
      ref3 TYPE REF TO c3.
oref = NEW c2( ).
CASE TYPE OF oref.
  WHEN TYPE c3.
    ref3 ?= oref.
  WHEN TYPE c2.
    ref2 ?= oref.
  WHEN TYPE c1.
    ref1 ?= oref.
  WHEN OTHERS.
    ...
ENDCASE.

Executable Example

[Case Distinction CASE TYPE OF for Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencase_type_of_exception_abexa.htm)

Addition   

... INTO target

Effect

For every statement WHEN TYPE of a case distinction introduced using CASE TYPE OF, a target variable target can be specified after the optional addition INTO as follows:

-   An existing [object reference variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry") ref whose [static type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_type_glosry.htm "Glossary Entry") is more general than or equal to the class class or interface intf specified in the statement.
-   An inline declaration [DATA(ref)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) or [FINAL(ref)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfinal_inline.htm). In this case, an object reference variable with the static type of the class class or the interface intf is declared.

If the addition INTO is specified in the first WHEN statement that fulfills the condition, the reference oref is assigned to ref before the statement block is executed, whereby both [upcasts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenup_cast_glosry.htm "Glossary Entry") and [downcasts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendown_cast_glosry.htm "Glossary Entry") can be performed.

Hint

The statement

WHEN TYPE class*|*intf INTO ref.

is a semantically identical short form of

WHEN TYPE class*|*intf.
  ref = oref.

The statement

WHEN TYPE class*|*intf INTO DATA(ref).

is a semantically identical short form of

WHEN TYPE class*|*intf.
  DATA(ref) = CAST class*|*intf( oref ).

Example

The following case distinction shows the short form of the case distinction of the previous example.

CLASS c1 DEFINITION.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
ENDCLASS.
CLASS c3 DEFINITION INHERITING FROM c2.
ENDCLASS.
DATA oref TYPE REF TO object.
DATA: ref1 TYPE REF TO c1,
      ref2 TYPE REF TO c2,
      ref3 TYPE REF TO c3.
oref = NEW c2( ).
CASE TYPE OF oref.
  WHEN TYPE c3 INTO ref3.
  WHEN TYPE c2 INTO ref2.
  WHEN TYPE c1 INTO ref1.
  WHEN OTHERS.
    ...
ENDCASE.

Executable Example

[Case Distinction CASE TYPE OF for RTTI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencase_type_of_rtti_abexa.htm)

Continue
[WHEN TYPE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwhen_type.htm)
![Example](exa.gif "Example") [Case Distinction CASE TYPE OF for Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencase_type_of_exception_abexa.htm)
![Example](exa.gif "Example") [Case Distinction CASE TYPE OF for RTTI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencase_type_of_rtti_abexa.htm)