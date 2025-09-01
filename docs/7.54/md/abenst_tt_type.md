  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_st.htm) →  [ST - Structure of ST Programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_programs_structure.htm) → 

ST - tt:type, tt:front, tt:node, Type Definitions

Syntax

<tt:type name="..." *\[**\[*line-*\]*type="..." *\[*length="..."*\]* *\[*decimals="..."*\]**\]*
  *\[*extensible=extensible\_flag*\]*\>
  *\[*<tt:front>
     <tt:node name="..." *\[**\[*line-*\]*type="..." *\[*...*\]**\]*
       *\[*extensible=extensible\_flag*\]*\>
       *\[*...*\]*
     </tt:node>
     ...
   </tt:front>*\]*
  *\[*<tt:node name="..." *\[**\[*line-*\]*type="..." *\[*...*\]**\]*
     *\[*extensible=extensible\_flag*\]*\>
     *\[*...*\]*
   </tt:node>
  ...*\]*
</tt:type>

Effect

The [data roots](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_root.htm) used in an ST program can be assigned type specifications (optional). As a rule, types from the repository (ABAP Dictionary, types of global classes) are used, although separate type definitions can be made in the ST program. An ST program outside of a template can contain one or more definitions of types with statement tt:type. The attribute name declares a symbolic name with which the defined type for typing data roots can be used. This symbolic name can also be used in other type definitions.

Elementary, structured, and tabular types can all be defined, which can be partially or fully generic. Moreover, references to globally defined data types of the repository and to types of the same ST program (defined using tt:type) are possible. Reference types cannot be defined as standalone types, but they can be created by using references to reference types from the ABAP repository.

Namespaces

The following XML namespaces in [asXML format](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xslt_asxml.htm) must be used to specify types from the repository and from the same ST program:

-   http://www.sap.com/abapxml/types/dictionary describes ABAP Dictionary.

-   http://www.sap.com/abapxml/types/type-pool/name describes the type group name.

-   http://www.sap.com/abapxml/types/class-pool/class describes the global class class.

-   http://www.sap.com/abapxml/types/defined/name describes the type that is defined in the current ST program using tt:type.

The type name that is specified in *\[*line-*\]*type then has to have the form p:NAME, where the namespace prefix p has to be bound to one of these URIs and NAME is the name of the actual type in uppercase letters. p therefore specifies where the type is defined.

Definition of Elementary Types

Definition of elementary types: The elementary ABAP types C, D, F, I, N, P, STRING, T, X or XSTRING (uppercase) are specified for the attribute value type after tt:type or tt:node.

For types C, N, P, and X, the length can also be specified in attribute length, and for type P the number of decimal places can be specified in attribute decimals. If decimals is specified without length, decimals is ignored. If length or decimals are not specified, the length and decimal places are generic.

C without a length specification corresponds to the generic ABAP type csequence, that is, it includes c with any length and string. Similarly, xsequence applies to X.

The name of an elementary type from the repository or the ST program can also be specified for the value of attribute type.

Definition of Structured Types

The statement tt:node, as an element of tt:type, is used to define structured types. Here the name of a component is determined by the value of attribute name and its type is determined using the value of the attribute *\[*line-*\]*type. Statement tt:node, which is an element of a different statement tt:node, defines a substructure. An element tt:type or tt:node that contains subelements tt:node must not specify any types except using *\[*line-*\]*type="?". In this case, line-type="?" is used to define a tabular type with a structured row type.

The type *\[*line-*\]*type can be specified after tt:node can be used to structure the types of a component as elementary types (see above), as table-like (see below), or as using a reference to a structured type of the repository or the ST program itself.

The type of a component can be partly or fully generic. In addition, a structured type is generic by default in terms of the number and order of its components. This means that a data root that is typed with a structured type can be bound to an ABAP structure that contains the specified components in a different order and/or additional components.

To write the number and order of the components of the initial part of a structured type or the whole structured type permanently and without gaps, the corresponding component definitions tt:node can be specified as subelements of statement tt:front. Statement tt:type or tt:node may have exactly one tt:front statement as the first subelement.

To restrict the number of components in a structure to the components that are defined in the ST program, you can use the extensible attribute of statements tt:type or tt:node. The following values can be specified for the attribute:

... "on"*|*"deep"*|*"off"*|*"deep-off" ...

The value "on" states that the current element may have direct subelements that are not explicitly specified. The value "deep" states that the current element and its subelements are extensible. This is the standard setting. The value "off" deactivates extensibility for the current element but not its subelements. In other words, direct subelements cannot be added to the element but (specified) subelements can be. The value "deep-off" deactivates extensibility for the current element and its subelements. These settings can be overwritten locally in individual subelements.

Definition of Tabular Types

The attribute line-type (after tt:type or tt:node) is used for the definition of tabular types. This attribute defines the type or the component as a table with the row type that is specified as the value of the attribute.

Elementary types (see above) or any repository or ST program types can be specified as the row type. A structured row type can also be declared by specifying "?" as the value of line-type. If the current element then contains tt:node statements as subelements, these define the components of the row type.

The row type of a tabular type can be partly or fully generic. The latter is defined by making the type specification line-type="?" without defining components using tt:node.

Definition of Reference Types

There is currently no ref-type addition available in tt:types for the definition of reference types. Standalone reference types can be created only by using a reference to a reference type in the ABAP repository. [tt:parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_parameter.htm) and [tt:variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_variable.htm), however, do have a ref-type addition.

Definition of Generic Types

All types whose properties have not been fully defined are generic in terms of the missing properties.

-   A type is fully generic if the attribute type is either not specified at all, or is specified with the value "?". type="?" is the same as not specifying anything. However, it should always be specified to make the program easier to understand. line-type="?" is also required to define a tabular type directly with a structured row type.

-   An elementary type N or P is partly generic if the length is not specified, or if decimal places are not specified for P.

-   Individual components can be generic in structured types; the number of components is also generic.

-   Tabular types can be partly or fully generic in terms of the row type.

Example

The type T1 that is defined below is a structure containing at least component C, which is an internal table row type containing at least components C1 (with dictionary type DDT1) and C2 (with defined type T2). Structure type T2 contains component D whose subcomponent D1 is an internal table with any row type.

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates"
  xmlns:ddic="http://www.sap.com/abapxml/types/dictionary"
  xmlns:def="http://www.sap.com/abapxml/types/defined" >
  <tt:type name="T1">
    <tt:node name="C" line-type="?">
      <tt:node name="C1" type="ddic:DDT1"/>
       <tt:node name="C2" line-type="def:T2"/>
    </tt:node>
  </tt:type>
  <tt:type name="T2">
    <tt:node name="D">
      <tt:node name="D1" line-type="?"/>
    </tt:node>
  </tt:type>