  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_serial_deserial.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20Symmetry%20of%20Serialization%20and%20Deserialization%2C%20ABENST_SYMMETRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

ST - Symmetry of Serialization and Deserialization

The language constructs of Simple Transformations support the formulation of reversible transformations, that is, of programs that provide the original values in the execution order serialization - deserialization (or vice versa). However, it is also possible to write programs that cannot be reversed.

Example

The simple example DEMO\_ST\_SYMMETRY illustrates a non-symmetrical transformation. Since the [tt.value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_value_elementary.htm) statements are not enclosed in separate elements, the serialized values of ROOT1 and ROOT2 are grouped in X.

<?sap.transform simple?>
<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT1"/>
  <tt:root name="ROOT2"/>
  <tt:template>
    <X>
      <tt:value ref="ROOT1"/>
      <tt:value ref="ROOT2"/>
    </X>
  </tt:template>
</tt:transform>

The following ABAP program can call the transformation:

DATA xml\_string TYPE string.
DATA field1 TYPE string VALUE 'Hello'.
DATA field2 TYPE string VALUE ' World!'.
DATA result1 LIKE field1.
DATA result2 LIKE field2.
CALL TRANSFORMATION demo\_st\_symmetry
  SOURCE root1 = field1
         root2 = field2
  RESULT XML xml\_string.
CALL TRANSFORMATION demo\_st\_symmetry
  SOURCE XML xml\_string
  RESULT root1 = result1
         root2 = result2.

The result of the serialization is:

<X>Hello World!</X>

Accordingly, the result of the deserialization to result1 is "Hello World!", while result2 retains its initial value, which is different from the original content of field1 and field2.

For a symmetrical transformation, the tt:value statements each have to appear in separate elements, or they must be separated by a unique text (which cannot appear in the first value).