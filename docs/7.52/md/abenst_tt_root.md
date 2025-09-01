  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [ST - Simple Transformations](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Structure of ST Programs](javascript:call_link\('abenst_programs_structure.htm'\)) →  [ST - Data Declarations](javascript:call_link\('abenst_data_declarations.htm'\)) → 

ST - tt:root, Data Roots

Syntax

<tt:root name="..." *\[**\[*line-*\]*type="..."
                    *\[*length="..."*\]*
                    *\[*decimals="..."*\]**\]*
                    *\[*...*\]* />

Effect

To be able to access ABAP data, an ST program must contain at least one declaration of a data root outside a template. The data roots are the interfaces of the ST program to the ABAP data objects, specified in the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) as source or target fields. Data roots are defined using the statement tt:root. A name must be assigned to the data root with the name attribute. It can be typed with the attribute *\[*line-*\]*type.

The data roots declared on the [tt:transform](javascript:call_link\('abenst_tt_transform.htm'\)) level form the context of the [main template](javascript:call_link\('abenst_tt_template_main.htm'\)) and can be addressed directly within it. The data roots are not recognized in [subtemplates](javascript:call_link\('abenst_tt_template_sub.htm'\)). However, they can be bound to the local data roots of subtemplates when these templates are [called](javascript:call_link\('abenst_tt_apply.htm'\)).

Note

An ST program without a data root describes a constant XML fragment that does not access ABAP data. In the statement CALL TRANSFORMATION, the syntax requires source fields or target fields to be specified. Data objects specified when ST programs are called without data roots are ignored in serializations and not changed in deserializations. The example for [literal texts](javascript:call_link\('abenst_tt_text.htm'\)) uses ST programs without data roots.

Data Root Name

The attribute name is used to declare a symbolic name that can be bound to an ABAP data object. This binding is achieved by assigning these names as bni to data object ei in serializations or to fi in deserializations in the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)).

The symbolic name is not case-sensitive and must be unique. The namespace also includes the data roots declared using [tt:parameter](javascript:call_link\('abenst_tt_parameter.htm'\)) and the variables declared using [tt:variable](javascript:call_link\('abenst_tt_variable.htm'\)). No data roots other than the ones specified here can be used in the statement CALL TRANSFORMATION.

Typing the Data Root

The data root can be typed with a data type using the attribute type or line-type of tt:root. Whereas type directly specifies the type, line-type means that it is an internal table of the named type.

For data roots without explicit typing, no checks are made until the transformation is executed. Explicit typing is used to check the ST program statically. Examples of invalid operations that can then be recognized by the compiler are:

-   Access to a nonexistent structure component

-   Loop across a non-table-like node

-   Handling a structured node as elementary

Elementary ABAP types, types from the repository, and types of the same ST program that are defined with [tt:type](javascript:call_link\('abenst_tt_type.htm'\)) can be specified as the value of *\[*line-*\]*type. Type specifications are subject to the same restrictions as the statement [tt:value](javascript:call_link\('abenst_tt_type.htm'\)).

Accessing a Data Root

Access to a data root is described under [Addressing the Data Roots](javascript:call_link\('abenst_addressing_root_node.htm'\)). [Serializations and deserializations](javascript:call_link\('abenst_serial_deserial.htm'\)) are subject to the general restriction that the content of a data root cannot be modified by serialization and only writes can be performed on a data root in deserializations.

Example

Six data roots including typing are defined in the following transformation. The data root R1 has the elementary ABAP type d, R2 has the type "internal table with elementary row type i, R3 has the type DSTRUCT from ABAP Dictionary, R4 has the type ABCD\_STRUCT from the type group ABCD, and R5 is a table across the type ABCSTRUCT defined in the global class CL\_ABC. The type of R6 is defined as the name STRUCT in the transformation itself.

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
  <tt:root name="R4" type="tp:ABCDSTRUCT"/>
  <tt:root name="R5" line-type="cl:ABCSTRUCT"/>
  <tt:root name="R6" type="def:STRUCT"/>
...