  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Calling Procedures](javascript:call_link\('abencall_procedures.htm'\)) →  [Method Calls](javascript:call_link\('abenmethod_calls.htm'\)) →  [Static Method Calls](javascript:call_link\('abenmethod_calls_static.htm'\)) →  [... meth1( ... )->meth2( ... )->..., Method Chaining](javascript:call_link\('abapcall_method_static_chain.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Method Chaining, ABENMETHOD_CHAINING_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

Method Chaining

This example demonstrates method chaining in an operand position.

Source Code   

REPORT demo\_method\_chaining.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    METHODS meth  IMPORTING str        TYPE string
                  RETURNING VALUE(ref) TYPE REF TO demo.
    DATA text TYPE string.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    cl\_demo\_output=>display(
      NEW demo( )->meth(
        \`Hello \` )->meth( \`world\` )->meth( \`!\` )->text ).  ENDMETHOD.
  METHOD meth.
    text &&= str.
    ref = me.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

In the argument of the method DISPLAY\_TEXT, [chained attribute access](javascript:call_link\('abenchained_attribute_acc_glosry.htm'\) "Glossary Entry") is applied to the attribute text of the class demo. The attribute is changed using three chained method calls.