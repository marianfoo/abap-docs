  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Calling Procedures](javascript:call_link\('abencall_procedures.htm'\)) →  [Method Calls](javascript:call_link\('abenmethod_calls.htm'\)) →  [Static Method Calls](javascript:call_link\('abenmethod_calls_static.htm'\)) →  [... meth1( ... )->meth2( ... )->... - method chaining](javascript:call_link\('abapcall_method_static_chain.htm'\)) → 

Method Chaining

This example demonstrates method chaining in an operand position.

Source Code

REPORT demo\_method\_chaining.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    METHODS meth  IMPORTING str        TYPE string
                  RETURNING value(ref) TYPE REF TO demo.
    DATA text TYPE string.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA oref TYPE REF TO demo.
    CREATE OBJECT oref.
    cl\_demo\_output=>display(
      oref->meth( \`Hello \` )->meth( \`world\` )->meth( \`!\` )->text ).  ENDMETHOD.
  METHOD meth.
    text &&= str.
    ref = me.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In the argument of the method DISPLAY\_TEXT statement, a [chained attribute access](javascript:call_link\('abenchained_attribute_acc_glosry.htm'\) "Glossary Entry") is performed on the attribute text of the class demo. The attribute is changed by three chained method calls.