---
title: "Method Chaining"
description: |
  This example demonstrates method chaining in an operand position. Source Code REPORT demo_method_chaining. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. METHODS meth  IMPORTING str        TYPE string RETURNING value(ref) TYPE REF TO demo. DATA text TYPE string. ENDCLA
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_chaining_abexa.htm"
abapFile: "abenmethod_chaining_abexa.htm"
keywords: ["select", "do", "try", "method", "class", "data", "abenmethod", "chaining", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_procedures.htm) →  [Method Calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_calls.htm) →  [Static Method Calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_calls_static.htm) →  [... meth1( ... )->meth2( ... )->... - Method Chaining](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_static_chain.htm) → 

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
    text = text && str.
    ref = me.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In the argument of the method DISPLAY\_TEXT statement, a [chained attribute access](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenchained_attribute_acc_glosry.htm "Glossary Entry") is performed on the attribute text of the class demo. The attribute is changed by three chained method calls.