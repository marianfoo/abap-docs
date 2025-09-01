  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Calling Procedures](javascript:call_link\('abencall_procedures.htm'\)) →  [Method Calls](javascript:call_link\('abenmethod_calls.htm'\)) →  [Static Method Calls](javascript:call_link\('abenmethod_calls_static.htm'\)) →  [... meth1( ... )->meth2( ... )->..., Method Chaining](javascript:call_link\('abapcall_method_static_chain.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Method%20Chaining%2C%20ABENMETHOD_CHAINING_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Method Chaining

This example demonstrates method chaining in an operand position.

Source Code   

\* Public class definition
CLASS cl\_demo\_method\_chaining DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    METHODS meth  IMPORTING str        TYPE string
                  RETURNING VALUE(ref)
                              TYPE REF TO cl\_demo\_method\_chaining.
    DATA text TYPE string.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_method\_chaining IMPLEMENTATION.
  METHOD main.
    out->write(
      NEW cl\_demo\_method\_chaining( )->meth(
        \`Hello \` )->meth( \`world\` )->meth( \`!\` )->text ).
  ENDMETHOD.
  METHOD meth.
    text &&= str.
    ref = me.
  ENDMETHOD.
ENDCLASS.

Description   

In the argument of the method DISPLAY\_TEXT, [chained attribute access](javascript:call_link\('abenchained_attribute_acc_glosry.htm'\) "Glossary Entry") is applied to the attribute text of the class demo. The attribute is changed using three chained method calls.