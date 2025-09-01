  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_st.htm) →  [ST - Structure of ST Programs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_programs_structure.htm) →  [ST - Data Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_data_declarations.htm) → 

ST - tt:root, Data Roots

Syntax

<tt:root name="..." *\[**\[*line-*\]*type="..."
                    *\[*length="..."*\]*
                    *\[*decimals="..."*\]**\]*
                    *\[*...*\]* />

Effect

To be able to access ABAP data, an ST program must contain at least one declaration of a data root outside a template. The data roots are the interfaces of the ST program to the ABAP data objects, specified in the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transformation.htm) as source or target fields. Data roots are defined using the statement tt:root. A name must be assigned to the data root with the name attribute. It can be typed with the attribute *\[*line-*\]*type.

The data roots declared on the [tt:transform](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_tt_transform.htm) level form the context of the [main template](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_tt_template_main.htm) and can be addressed directly within it. The data roots are not recognized in [subtemplates](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_tt_template_sub.htm). However, they can be bound to the local data roots of subtemplates when these templates are [called](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_tt_apply.htm).

Hint

An ST program that does not contain a data root describes a constant XML fragment that does not access ABAP data. In the statement CALL TRANSFORMATION, the syntax requires source fields or target fields to be specified. Data objects specified when ST programs are called without data roots are ignored in serializations and not changed in deserializations. The example for [literal texts](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_tt_text.htm) uses ST programs without data roots.

Data Root Name

The attribute name is used to declare a symbolic name that can be bound to an ABAP data object. This binding is achieved by assigning these names as bni to the data object ei in serializations or to fi in deserializations in the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transformation.htm).

The symbolic name is not case-sensitive and must be unique. The namespace also includes the data roots declared using [tt:parameter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_tt_parameter.htm) and the parameters declared using [tt:variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_tt_variable.htm). No data roots other than the ones specified here can be used in the statement CALL TRANSFORMATION.

Typing the Data Root

The data root can be typed with a data type using the attribute type or line-type of tt:root. Whereas type directly specifies the type, line-type means that it is an internal table of the named type.

For data roots without explicit typing, no checks are made until the transformation is executed. Explicit typing is used to check the ST program statically. Examples of invalid operations that can then be recognized by the compiler are:

-   Access to a nonexistent structure component
-   Loop across a non-table-like node
-   Handling a structured node as elementary

Elementary ABAP types, types from the repository, and types of the same ST program that are defined using [tt:type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_tt_type.htm) can be specified as the value of *\[*line-*\]*type.The same restrictions apply to the type specifications as to the type statement [tt:value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_tt_type.htm).

Accessing a Data Root

Access to a data root is described under [Addressing the Data Roots](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_addressing_root_node.htm). [Serializations and deserializations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_serial_deserial.htm) are subject to the general restriction that the content of a data root cannot be modified by serialization and only writes can be performed on a data root in deserializations.

Example

Six data roots including typing are declared in the following transformation. The data root R1 has the elementary ABAP type d, R2 has the type internal table with elementary line type i, R3 has the type DSTRUCT from the ABAP Dictionary, R4 has the type ABCD\_STRUCT from the type pool ABCD, and R5 is a table across the type ABCSTRUCT defined in the global class CL\_ABC. The type of R6 is defined as the name STRUCT in the transformation itself.

...
<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates"
  xmlns:ddic="http://www.sap.com/abapxml/types/dictionary"
  xmlns:tp="http://www.sap.com/abapxml/types/type-pool/ABCD"
  xmlns:cl="http://www.sap.com/abapxml/types/class-pool/CL\_ABC"
  xmlns:def="http://www.sap.com/abapxml/types/defined" >
  <tt:type name="STRUCT">
    <tt:node name="C1" type="I"/>
    <tt:node name="C2" type="I"/>
  </tt:type>
  <tt:root name="R1" type="D"/>
  <tt:root name="R2" line-type="I"/>
  <tt:root name="R3" type="ddic:DSTRUCT"/>
  <tt:root name="R4" type="tp:ABCD\_STRUCT"/>
  <tt:root name="R5" line-type="cl:ABCSTRUCT"/>
  <tt:root name="R6" type="def:STRUCT"/>
...