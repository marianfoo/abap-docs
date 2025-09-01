---
title: "Simple Transformation, Example of an ST Program"
description: |
  Symmetrical serialization and deserialization of a nested structure. Source Code REPORT demo_st_program. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA(out) = cl_demo_output=>new( )->begin_section( `Serialization` ). DATA sour
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_program_abexa.htm"
abapFile: "abenst_program_abexa.htm"
keywords: ["select", "do", "method", "class", "data", "abenst", "program", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_st.htm) →  [ST - Structure of ST Programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_programs_structure.htm) → 

Simple Transformation, Example of an ST Program

Symmetrical serialization and deserialization of a nested structure.

Source Code

REPORT demo\_st\_program.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( \`Serialization\` ).
    DATA source1(10) TYPE c VALUE 'Field1'.
    DATA source2(10) TYPE c VALUE 'Field2'.
    CALL TRANSFORMATION demo\_st\_program
      SOURCE root1 = source1
             root2 = source2
      RESULT XML DATA(xml).
    out->write\_xml( xml ).
    out->next\_section( \`Deserialization\` ).
    DATA result1 LIKE source1.
    DATA result2 LIKE source1.
    CALL TRANSFORMATION demo\_st\_program
      SOURCE XML xml
      RESULT root1 = result1
             root2 = result2.
    out->write\_data( result1
      )->write\_data( result2
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The called transformation DEMO\_ST\_PROGRAM shows the principal structure of an ST program:

<?sap.transform simple?>
<tt:transform template="tmpl1"
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT1"/>
  <tt:root name="ROOT2"/>
  <tt:template name="tmpl1">
    <X0>
      <X1>
        <tt:value ref="ROOT1" />
      </X1>
      <X2>
        <tt:value ref="ROOT2" />
      </X2>
    </X0>
  </tt:template>
</tt:transform>

A single template, tmpl1, is defined as the [main template](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_template_main.htm). Two [data roots](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_root.htm), ROOT1 and ROOT2, are declared. The template contains two subelements, X1 and X2 of an element X0, which are given the values of the data roots in serializations (or whose values are given to the data roots in deserializations) using the command [tt:value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_value_elementary.htm). After the deserialization, result1 and result2 have the same content as source1 and source2.