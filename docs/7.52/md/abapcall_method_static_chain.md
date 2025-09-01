  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_procedures.htm) →  [Method Calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_calls.htm) →  [Static Method Calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_calls_static.htm) → 

... meth1( ... )->meth2( ... )->... - Method Chaining

Syntax

... *{* [static\_meth](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_meth_ident_stat.htm)( ... )->meth1( ... )->meth2( ... )->...->meth( ... ) *}*
  *|* *{* [static\_meth](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_meth_ident_stat.htm)( ... )->meth1( ... )->meth2( ... )->...->attr        *}* ...

Alternatives:

[1\. static\_meth( ... )->meth1( ... )->meth2( ... )->...->meth( ... )](#!ABAP_ALTERNATIVE_1@1@)
[2\. static\_meth( ... )->meth1( ... )->meth2( ... )->...->attr](#!ABAP_ALTERNATIVE_2@2@)

Effect

Chains static method calls to a chained method call or chained attribute access. [static\_meth](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_meth_ident_stat.htm), meth1, meth2, ... , expect [functional methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_functional.htm) whose return values are reference variables pointing to objects with the next method in question. All methods that follow static\_meth must be called using the object component selector.

The parameters are passed to the functional methods static\_meth, meth1, meth2, ... using the syntax valid for [functional method calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_functional.htm).

Alternative 1

static\_meth( ... )->meth1( ... )->meth2( ... )->...->meth( ... )

Effect

Chained method call. Calls the instance method meth in an object. The reference variable for the object is the return value of the preceding method chaining.

A chained method call can be specified as a [standalone statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_static_short.htm) or as a [functional method call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_functional.htm) in a suitable [operand position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions.htm). The relevant rules apply in parameter passing to meth.

If the return value of the last method has a structured data type, the chained method call can, like a structure, be specified in front of the [structure component selector](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstructure_component_sel_glosry.htm "Glossary Entry") \- and use this to access a component of the structure.

Notes

-   In static\_meth, a [constructor expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") can be specified for oref with a [constructor operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_new.htm) or [CAST](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_cast.htm) in both standalone statements and in functional calls.
    
-   The obsolete statement [CALL METHOD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_static.htm) cannot be used as a prefix in a standalone statement in this form of the static method call.
    

Example

Calls the method m3 in an object of the class c3, addressed using method chaining.

CLASS c3 DEFINITION.
  PUBLIC SECTION.
    METHODS m3 CHANGING c3 TYPE string.
ENDCLASS.
CLASS c2 DEFINITION.
  PUBLIC SECTION.
    METHODS m2  IMPORTING i2 TYPE string
                RETURNING value(r2) TYPE REF TO c3.
ENDCLASS.
CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS m1 IMPORTING i1 TYPE string
                     RETURNING value(r1) TYPE REF TO c2.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD m1.
    CREATE OBJECT r1.
  ENDMETHOD.
ENDCLASS.
CLASS c2 IMPLEMENTATION.
  METHOD m2.
    CREATE OBJECT r2.
  ENDMETHOD.
ENDCLASS.
CLASS c3 IMPLEMENTATION.
  METHOD m3.
    c3 = 'New text'.
    MESSAGE c3 TYPE 'I'.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  DATA txt TYPE string VALUE \`test\`.
  c1=>m1(
    i1 = \`p1\` )->m2(
    i2 = \`p2\` )->m3(
    CHANGING c3 = txt ).

Alternative 2

static\_meth( ... )->meth1( ... )->meth2( ... )->...->attr

Effect

Chained attribute access. Accesses the instance attribute attr in an object. The reference variable for the object is the return value of the preceding method chaining.

If the attribute has a structured data type, the chained attribute access can, like a structure, be specified in front of the [structure component selector](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstructure_component_sel_glosry.htm "Glossary Entry") \- and use this to access a component of the structure.

Chained attribute access can currently only be specified in suitable [reading positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions.htm). It is not yet possible to make writes on an attribute addressed using method chaining.

Example

Chained attribute access in executable example program DEMO\_METHOD\_CHAINING.

cl\_demo\_output=>display(
  oref->meth( \`Hello \` )->meth( \`world\` )->meth( \`!\` )->text ).

Executable Example

[Method Chaining](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_chaining_abexa.htm)

Continue
![Example](exa.gif "Example") [Method Chaining](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_chaining_abexa.htm)