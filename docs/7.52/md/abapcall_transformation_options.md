---
title: "CALL TRANSFORMATION - OPTIONS"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation_shortref.htm) Syntax ... OPTIONS clear              = val data_refs          = val initial_components = val technical_types    = val value_handling     = val
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation_options.htm"
abapFile: "abapcall_transformation_options.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "internal-table", "abapcall", "transformation", "options"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_trafos.htm) →  [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation.htm) → 

CALL TRANSFORMATION - OPTIONS

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation_shortref.htm)

Syntax

... OPTIONS *\[*clear              = val*\]*
            *\[*data\_refs          = val*\]*
            *\[*initial\_components = val*\]*
            *\[*technical\_types    = val*\]*
            *\[*value\_handling     = val*\]*
            *\[*xml\_header         = val*\]* ...

Extras:

[1\. ...clear](#!ABAP_ADDITION_1@1@)
[2\. ... data\_refs](#!ABAP_ADDITION_2@2@)
[3\. ... initial\_components](#!ABAP_ADDITION_3@3@)
[4\. ... technical\_types](#!ABAP_ADDITION_4@4@)
[5\. ... value\_handling](#!ABAP_ADDITION_5@5@)
[6\. ... xml\_header](#!ABAP_ADDITION_6@6@)

Effect

The addition OPTIONS enables predefined transformation options to be specified, to which specific values can be assigned to control transformations. The values must be defined as data objects val of type c or string. Each transformation option may only be specified once. For a transformation option you can specify several values separated by blank spaces in val. If an invalid value is specified for a transformation option, an exception of class CX\_SY\_TRANS\_OPTION\_ERROR is raised. This exception can be handled.

Note

The transformations apply to XML and also to [JSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenjson_glosry.htm "Glossary Entry") (where applicable).

Addition 1

...clear

Effect

The transformation option clear controls how the ABAP target fields are initialized when deserializing XML or JSON to ABAP.

Possible Values

Meaning

all

All target fields specified after RESULT are initialized before calling the transformation. This is the recommended setting.

supplied

For ST, the target fields which have a root node assigned to them in the ST program are initialized before calling the transformation. In XSLT, target fields for which there is a root node in the XML data are initialized before importing the nodes. Other target fields keep their value.

none

Default, the target fields specified after RESULT are not initialized, except for internal tables

Note

Using the default setting (none) can become a critical issue when nonexistent or empty elements are deserialized in data objects. In the case of nonexistent elements, all data objects retain their original values. With empty elements, structures retain their values. In cases like this, it is advisable to use clear with the value "all".

Addition 2

... data\_refs

Effect

The transformation option data\_refs controls the output of [data references](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_reference_glosry.htm "Glossary Entry") if the transformation is from ABAP to XML or JSON.

Possible Values

Meaning

no

Default for ST, no data references are produced.

heap

Default for XSLT and only allowed there; data referenced using [heap references](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheap_reference_glosry.htm "Glossary Entry") is produced as subelements of the [asXML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasxml_glosry.htm "Glossary Entry") elements <asx:heap> or the asJSON object %heap. Data objects references using [stack references](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstack_reference_glosry.htm "Glossary Entry") are not serialized.

heap-or-error

Only possible for XSLT. As heap, but the exception CX\_REFERENCE\_NOT\_SERIALIZABLE is raised if the data to be serialized contains [stack references](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstack_reference_glosry.htm "Glossary Entry").

heap-or-create

Only possible for XSLT. Like heap, but data objects referenced using [stack references](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstack_reference_glosry.htm "Glossary Entry") are handled like data objects referenced using [heap references](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheap_reference_glosry.htm "Glossary Entry").

embedded

Only possible for XSLT. Referenced data objects are produced together with the reference. It is not possible to deserialize XML or JSON data created in this way, since the identity of the objects is lost when serialized.

Note

Exception CX\_REFERENCE\_NOT\_SERIALIZABLE cannot be caught directly. It can only be caught using CX\_XSLT\_SERIALIZATION\_ERROR.

Executable Example

For information about the differences between serializing to heap and embedded elements, see [Serializations to Heap or Embedded](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenserialize_ref_heap_embed_abexa.htm).

Addition 3

... initial\_components

Effect

The transformation option initial\_components controls the output of initial structure components when transforming from ABAP to XML or JSON.

Possible Values

Meaning

include

Initial components of structures are produced.

suppress\_boxed

Default setting, does not produce initial [boxed components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboxed_component_glosry.htm "Glossary Entry") of structures; produces initial components of all other structures.

suppress

Initial components of structures are not produced.

Notes

-   The suppression of initial components in serializations reduces the data volume. However, this option should be used with caution and only there is complete control over deserializations. If the option clear is not used with the value "all" in serializations, suppressed components in ABAP data objects are ignored and the target fields retain their values. Deserialization in external systems can cause problems if a suppressed component is expected.
    
-   The suppression of initial components also affects structure components that are typed with the domains for [XML schema data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_schema.htm). For example, a component typed with the domain XSDBOOLEAN is not displayed if it has the value abap\_false. This can also cause unwanted results.
    

Addition 4

... technical\_types

Effect

The transformation option technical\_types controls the behavior if no type description can be serialized when serializing data references to [asXML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasxml_reference_variable.htm) or [asJSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_asjson_reference_var.htm). This is the case when the [technical type attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentechnical_type_attr_glosry.htm "Glossary Entry") of the [dynamic type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynamic_type_glosry.htm "Glossary Entry") of the data reference variable are known, but the type does not have a name (or it only has a technical name).

Possible Values

Meaning

error

Default for XSLT and only allowed there. The serialization of a data reference variable with a dynamic type without a name raises the exception CX\_REFERENCE\_NOT\_SERIALIZABLE.

ignore

Only possible for XSLT. A data reference variable with a dynamic type without a name is ignored in serializations.

Notes

-   Exception CX\_REFERENCE\_NOT\_SERIALIZABLE cannot be caught directly. It can only be caught using CX\_XSLT\_SERIALIZATION\_ERROR.
    
-   Data types without names are [bound data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbound_data_type_glosry.htm "Glossary Entry") or data types constructed using [RTTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrtts_glosry.htm "Glossary Entry").
    

Addition 5

... value\_handling

Effect

The transformation option value\_handling controls the tolerance of conversions when [mapping elementary ABAP types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_elementary.htm).

Possible Values

Meaning

default

Default setting; in serializations, if there is an invalid value in a field of type n, the exception CX\_SY\_CONVERSION\_NO\_NUMBER is raised. When deserializing, the exception CX\_SY\_CONVERSION\_DATA\_LOSS is raised if target fields of the types c, n, or x are too short or the exception CX\_SY\_CONVERSION\_LOST\_DECIMALS is raised if target fields of the type p have too few decimal places.

move

Only possible in serializations. Invalid values in a field of type n are copied to XML or JSON without being changed.

accept\_data\_loss

Only possible in deserializations. If target fields of types c, n, or x are too short, surplus data for c and x is cut off on the right and surplus data for n is cut off on the left.

accept\_decimals\_loss

Only possible in deserializations. If target fields of the type p have too few decimal places, they are rounded up to the available decimal places.

reject\_illegal\_characters

Only possible in deserializations. If a value to be deserialized contains characters that are not valid for the encoding of the XML or JSON data or for the current code page of AS ABAP, an exception of the type CX\_SY\_CONVERSION\_CODEPAGE is raised. If the XML or JSON data is passed as an iXML input stream, the setting of the iXML parser overrides the encoding of the XML or JSON data.

Notes

-   The exceptions mentioned cannot be handled directly by CALL TRANSFORMATION and are packed into CX\_TRANSFORMATION\_ERROR or its subclasses.
    
-   If a value is specified that is not supported in the specified direction however, the exception CX\_SY\_TRANS\_OPTION\_ERROR is raised (can be handled directly).
    

Example

If value\_handling = 'reject\_illegal\_characters' is specified, for example, an exception is raised if, in the XML header of XML data in the Latin-1 character set, encoding="utf-8" is specified and the XML data contains characters other than those of the 7-bit ASCII character set.

Addition 6

... xml\_header

Effect

The transformation option xml\_header controls the output of the XML header when transforming to XML and writing to a data object of type c, string, or to an internal table.

Possible Values

Meaning

no

No XML header is produced.

without\_encoding

An XML header is produced without specifying the encoding.

full

Default setting; an XML header is produced, specifying the encoding.

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_TRANS\_OPTION\_ERROR

-   Cause: Invalid transformation option or invalid value.