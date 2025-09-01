  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Flow Control](javascript:call_link\('abenst_flow_control.htm'\)) → 

ST - tt:serialize, tt:deserialize, Transformation Direction

Syntax

<tt:serialize>
  ...
</tt:serialize>
<tt:deserialize>
  ...
</tt:deserialize>

Effect

These ST statements can be used to limit parts of templates for execution in serializations or deserializations:

All template elements specified within the tt:serialize element are only respected in serializations. All the template elements specified within the tt:deserialize element are only respected in deserializations.

Example

The following Simple Transformation serializes a structure and deserializes to an internal table:

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT1"/>
  <tt:root name="ROOT2"/>
  <tt:template>
    <X>
      <tt:serialize>
        <Y>
          <tt:value ref=".ROOT1.COL1" />
        </Y>
        <Y>
          <tt:value ref=".ROOT1.COL2" />
        </Y>
        <Y>
          <tt:value ref=".ROOT1.COL3" />
        </Y>
      </tt:serialize>
      <tt:deserialize>
        <tt:loop ref=".ROOT2">
          <Y>
            <tt:value/>
          </Y>
        </tt:loop>
      </tt:deserialize>
    </X>
  </tt:template>
</tt:transform>

The following ABAP program can call the transformation:

DATA xml\_string TYPE string.
DATA: BEGIN OF struc,
        col1 TYPE i VALUE 1,
        col2     TYPE i VALUE 2,
        col3 TYPE i VALUE 3,
      END OF struc.
DATA itab TYPE TABLE OF i.
CALL TRANSFORMATION ...
  SOURCE root1 = struc
  RESULT XML xml\_string.
CALL TRANSFORMATION ...
  SOURCE XML xml\_string
  RESULT root2 = itab.

After deserialization, the internal table contains three lines with the values of the structure components.