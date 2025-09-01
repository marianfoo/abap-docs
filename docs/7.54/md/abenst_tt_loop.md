  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [ST - Simple Transformations](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Transformation of ABAP Values](javascript:call_link\('abenst_abap_values.htm'\)) → 

ST - tt:loop, Internal Tables

Syntax

<tt:loop *\[*ref="node"*\]* *\[*name="alias"*\]*\>
  ...
</tt:loop>

Effect

Internal tables are serialized and deserialized within a loop defined by tt:loop that sets the [current node](javascript:call_link\('abenst_tt_ref.htm'\)) to the current table row.

The optional attribute ref can be used to define the current node for the command. If ref is not specified, the current node of the surrounding element is used. The ABAP data object that is bound to the current node must be an internal table.

The name attribute can be used to define an alias for the current node within the loop. In the tt:loop loop, the current node can then be addressed with $alias. When nested loops are used, the alias permits access to the current nodes of outer loops. If only one loop is used and in the outermost loop, $alias is equivalent to $ref when entering the loop.

Serialization

In serializations, a loop is run for the entire internal table. If the internal table is blank, processing continues after the element. In each loop pass, the current node of a data node is set and the current ABAP table row is bound to the data node. The content of element tt:loop, which can contain any template elements, is processed for each data node.

Deserialization

In deserializations, the ABAP table is initialized and the content of element tt:loop is also executed in a loop. The XML data continues to be processed until a position is reached that cannot be processed with the content of the element. A new row is created in the bound ABAP table for each loop pass and is in turn bound to the current node. The XML values that are deserialized in the current loop pass are passed on to the current table row.

Notes

-   If it must be possible to deserialize a transformation, it must be possible to end loop executions properly, especially in the case of nested tt:loop loops. This is the case when the content of a tt:loop element can be synchronized with the sections to be deserialized. If the XML elements in a loop are not sufficient, the entire loop body can be enclosed with a literal XML element, for example, which defines a hierarchy level that can be analyzed in deserializations.

-   In a simple transformation, a data node must be handled either exclusively as an internal table or not at all. In particular, this applies to dividing a template into different transformation directions.

Example

In the following symmetrical simple transformation, the internal table that is bound to the ROOT data roots and its table-like component values are serialized and deserialized in two nested tt:loop loops. For demonstration purposes, an alias called line is defined in the outermost loop and is addressed in the loop using $line. Since $line is not addressed in the inner loop, the definition of the alias name would not be necessary here.

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
    <tab1>
      <tt:loop ref=".ROOT" name="line">
        <key>
          <tt:value ref="$line.key" />
        </key>
        <tab2>
          <tt:loop ref="$line.values">
            <value>
              <tt:value />
            </value>
          </tt:loop>
        </tab2>
      </tt:loop>
    </tab1>
  </tt:template>
</tt:transform>

The following ABAP program can call the transformation:

TYPES: BEGIN OF line,
         key    TYPE i,
         values TYPE TABLE OF i WITH EMPTY KEY,
       END OF line.
DATA itab TYPE TABLE OF line WITH EMPTY KEY.
DATA result LIKE itab.
itab =
  VALUE #( FOR j = 2 UNTIL j > 4
           ( key    = j
             values = VALUE #( ( j \*\* 2 )
                               ( j \*\* 3 )
                               ( j \*\* 4 ) ) ) ).
CALL TRANSFORMATION id
  SOURCE root = itab
  RESULT XML DATA(xml\_xstring).
cl\_abap\_browser=>show\_xml( EXPORTING xml\_xstring = xml\_xstring ).
CALL TRANSFORMATION id
  SOURCE XML xml\_string
  RESULT root = result.

The result of the serialization is the following:

<tab1>
  <key>2</key>
  <tab2>
    <value>4</value>
    <value>8</value>
    <value>16</value>
  </tab2>
  <key>3</key>
  <tab2>
    <value>9</value>
    <value>27</value>
    <value>81</value>
  </tab2>
  <key>4</key>
  <tab2>
    <value>16</value>
    <value>64</value>
    <value>256</value>
  </tab2>
</tab1>

The transformation is [symmetrical](javascript:call_link\('abenst_symmetry.htm'\)). After deserialization, result has the same content as itab.