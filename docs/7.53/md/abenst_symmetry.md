  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [ST - Simple Transformations](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) → 

ST - Symmetry of Serialization and Deserialization

The language constructs of simple transformations support the formulation of reversible transformations, that is, of programs that provide the original values in the execution order serialization - deserialization (or vice versa). However, it is also possible to write programs that cannot be reversed.

Example

This simple example illustrates a non-symmetrical transformation. Since the [tt.value](javascript:call_link\('abenst_tt_value_elementary.htm'\)) commands are not enclosed in separate elements, the serialized values of ROOT1 and ROOT2 are grouped in X.

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
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
DATA result1 like field1.
DATA result2 like field2.
CALL TRANSFORMATION ...
  SOURCE root1 = field1
         root2 = field2
  RESULT XML xml\_string.
CALL TRANSFORMATION ...
  SOURCE XML xml\_string
  RESULT root1 = result1
         root2 = result2.

The result of the serialization is:

<X>Hello World!</X>

Accordingly, the result of the deserialization to result1 is "Hello World!", while result2 retains its initial value, which is different from the original content of field1 and field2.

For a symmetrical transformation, the tt:value commands each have to appear in separate elements or they must be separated by a unique text (which cannot appear in the first value).