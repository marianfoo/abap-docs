---
title: "CALL TRANSFORMATION"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation_shortref.htm) Syntax CALL TRANSFORMATION ID  trans(name) PARAMETERS p1 = e1 p2 = e2 ...(ptab) OPTIONS options(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/a
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation.htm"
abapFile: "abapcall_transformation.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abapcall", "transformation"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_trafos.htm) → 

CALL TRANSFORMATION

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation_shortref.htm)

Syntax

CALL TRANSFORMATION ID
                  *|* trans*|*(name)
                    *\[*PARAMETERS *{*p1 = e1 p2 = e2 ...*}**|*(ptab)*\]*
                    *\[*[OPTIONS options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation_options.htm)*\]*
                    SOURCE *{*XML src\_xml*}*
                         *|* *{**{*bn1 = e1 bn2 = e2 ...*}**|*(stab)*}*
                    RESULT *{*XML rslt\_xml*}*
                         *|* *{* *{*bn1 = f1 bn2 = f2 ...*}**|*(rtab) *}*.

Alternatives:

[
1\. ... ID ...](#!ABAP_ALTERNATIVE_1@1@)
[
2\. ... trans*|*(name) ...](#!ABAP_ALTERNATIVE_2@2@)

Extras:

[
1a. ... SOURCE *{*XML src\_xml*}**|**{**{*bn1 = e1 bn2 = e2 ...*}**|*(stab)*}*](#!ABAP_ADDITION_1A@1@)
[
1b. ... RESULT *{*XML rslt\_xml*}**|**{**{*bn1 = f1 bn2 = f2 ...*}**|*(rtab)*}*](#!ABAP_ADDITION_1B@2@)
[
2\. ... PARAMETERS *{**{*p1 = e1 p2 = e2 ...*}**|*(ptab)*}*](#!ABAP_ADDITION_2@3@)

Effect

This statement calls the specified [XSL transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxsl_transformation_1_glosry.htm "Glossary Entry") (XSLT) or a [simple transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensimple_transformation_glosry.htm "Glossary Entry") (ST). The source of the transformation is specified behind SOURCE and the result is stored behind RESULT. PARAMETERS can be used to pass parameters to the transformation. The addition [OPTIONS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation_options.htm) can be used to specify transformation options options. The possible transformation types are:

-   from XML to XML (for XSLT only)
    
-   from XML to ABAP (for XSLT and simple transformations only)
    
-   from ABAP to XML (for XSLT and simple transformations only)
    
-   from ABAP to ABAP (for XSLT only)
    

[JSON-XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenjson_xml_glosry.htm "Glossary Entry"), which maps [JSON data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenjson_glosry.htm "Glossary Entry") to XML, can be used to execute all categories of transformations for JSON that are also possible for XML. More information is available in [Transformations for JSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_json_trafos.htm).

Notes

-   The characters <, \>, &, ", and ', which have a separate meaning in XML syntax, are handled automatically for XML data. When XML data is written, the required XML notation <, &gt;, &amp;, &quot;, or &apos; is created in values of elements or attributes. When XML data is read, the XML notation is transformed to the appropriate characters. It is not usually necessary to apply the escape character function [escape](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenescape_functions.htm) or a similar method to character-like XML results of the statement CALL TRANSFORMATION and would actually produce incorrect results. An exception to this rule is creating HTML data with XSLT in cases where it contains JavaScript parts.
    
-   When JSON data is written, [syntax characters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenjson_oview.htm) in character-like values are prefixed automatically with the escape character \\. Conversely, the escape character is removed from character-like values when JSON data is read.
    
-   When a transformation is performed, methods from the [class libraries for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_libs.htm) are used internally.
    

-   In the case of XSLT, a [DOM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendom_glosry.htm "Glossary Entry") is always needed as a source. This DOM is constructed and processed using the [iXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib.htm). In the case of the [identity transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID, the [iXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib.htm) is used only if appropriate objects are specified as source or target.

-   ST is processed serially, using the [sXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib.htm).

The library used also determines the character set that is supported. The iXML Library supports [UCS-2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenucs2_glosry.htm "Glossary Entry"); the sXML Library supports [UTF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenutf_glosry.htm "Glossary Entry").

Example

The transaction STDEMO demonstrates various transformations from ABAP data to [XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_glosry.htm "Glossary Entry") and [JSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenjson_glosry.htm "Glossary Entry").

Alternative 1

... ID ...

Effect

Specifies the [identity transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID directly. This transformation exists as an XSL transformation in the repository, but is executed by the runtime environment in an optimized ID engine, depending on the transformation source or target. For more information, see:

-   [Identity transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_id.htm)
    
-   [Identity transformation for JSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_json_trafo_id.htm)
    

Executable Example

[Executable Example of an Identity Transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxslt_abexa.htm)

Alternative 2

... trans*|*(name) ...

Effect

Specifies any transformation. The transformation addition can be specified either statically or dynamically:

-   trans
    

If static, the transformation is specified directly as trans.

-   (name)
    

If dynamic, the transformation is specified as the uppercase content of a parenthesized character-like data object name.

The specified transformation must exist as an [XSLT program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxsl_transformation_2_glosry.htm "Glossary Entry") or as a [simple transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensimple_transformation_glosry.htm "Glossary Entry") in the [repository](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_glosry.htm "Glossary Entry"). If a dynamically specified transformation is not found, an exception of the class CX\_INVALID\_TRANSFORMATION is raised.

Executable Example

[Executable Example of a Simple Transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_program_abexa.htm)

Addition 1a

... SOURCE *{*XML src\_xml*}**|**{**{*bn1 = e1 bn2 = e2 ... *}**|*(stab)*}*

Effect

Specifying the source.

Transformation of XML Data

When XML src\_xml is specified, the [XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_glosry.htm "Glossary Entry") data in src\_xml is transformed. src\_xml can exist in the following forms:

-   As a data object with the type string or as a [standard table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry") character-like row type, which can contain the following data:
    

-   Character-like [XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_glosry.htm "Glossary Entry") data in XML 1.0 format.

-   Character-like [JSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenjson_glosry.htm "Glossary Entry") data. When any transformation trans*|*(name) is used, the JSON data is converted to the associated [JSON XML format](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenjson_xml_glosry.htm "Glossary Entry") and passed to this transformation. The predefined [identity transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenid_trafo_glosry.htm "Glossary Entry") [ID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_json_trafo_id.htm) handles the JSON data directly.

-   As a data object with the type xstring or as a [standard table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry") byte-like row type, which can contain the following data:
    

-   Byte-like representation of the characters in [XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_glosry.htm "Glossary Entry") data in XML 1.0 format, in accordance with a code page such as UTF-8.

-   [XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_glosry.htm "Glossary Entry") data in [Binary XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbinary_xml_glosry.htm "Glossary Entry") format.

-   Byte-like representation of the characters in [JSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenjson_glosry.htm "Glossary Entry") data, in accordance with a code page such as UTF-8. When any transformation trans*|*(name) is used, the JSON data is converted to the associated [JSON XML format](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenjson_xml_glosry.htm "Glossary Entry") and passed to this transformation. The predefined [identity transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenid_trafo_glosry.htm "Glossary Entry") [ID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_json_trafo_id.htm) handles the JSON data directly.

-   As an interface reference variable for objects in [iXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib.htm) (XSLT only):
    

-   Interface reference variable with the type IF\_IXML\_ISTREAM, pointing to an [input stream](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_input_output.htm) that reads XML data.

-   Interface reference variable with the type IF\_IXML\_NODE, pointing to a node or a full XML document in [DOM representation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_dom_access.htm).

-   As a reference variable with the type IF\_SXML\_READER or CL\_SXML\_READER for [XML readers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_reader_glosry.htm "Glossary Entry") in [sXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib.htm). The transformation moves the reader by one node and processes the entire matching subtree. If the transformation is successful, the reader is located at the end of the processed data. Any valid reader can be specified:
    

-   XML readers for [XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_glosry.htm "Glossary Entry") data in XML 1.0 format.

-   XML readers for [XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_glosry.htm "Glossary Entry") data in [Binary XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbinary_xml_glosry.htm "Glossary Entry") format.

-   XOP readers for [XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_glosry.htm "Glossary Entry") data in [XOP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxop_glosry.htm "Glossary Entry") format.

-   JSON readers for [JSON data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenjson_glosry.htm "Glossary Entry"). When any transformation trans*|*(name) is used, the JSON reader returns the JSON data in [JSON-XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenjson_xml_glosry.htm "Glossary Entry") format. When a predefined [identity transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenid_trafo_glosry.htm "Glossary Entry") [ID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_json_trafo_id.htm) is used, the JSON data are handled directly.
    

Notes

-   The interface IF\_SXML\_READER and the class CL\_SXML\_READER are part of the API of [sXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib.htm), whose objects can be accessed using CALL TRANSFORMATION.
    
-   XML data in [XOP format](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxop_glosry.htm "Glossary Entry") can only be transformed using an XOP reader from sXML Library. All other formats can be also specified in appropriate strings or internal tables.
    
-   The interfaces IF\_IXML\_ISTREAM and IF\_IXML\_NODE are part of the API of the [iXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib.htm), whose objects can be accessed using CALL TRANSFORMATION.
    
-   For compatibility reasons, src\_xml can also be a class reference variable of the type CL\_FX\_READER. However, the class CL\_FX\_READER is triggered by CL\_SXML\_READER.
    
-   When specifying XML data in strings or internal tables, it is best to use byte strings or byte-like row types and a representation in the UTF-8 code page.
    
-   The methods CONVERT\_FROM and CONVERT\_TO from the class CL\_ABAP\_CODEPAGE can be used to transform character-like XML data or JSON data to a byte-like representation in accordance with a code page (and back).
    

Transformation of ABAP Data

bn1 = e1 ... or (stab) is used to specify the ABAP data e1 e2 ... to transform.

-   When the [identity transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID is called, the ABAP data are either serialized in the [canonical XML format](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml.htm) [asXML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasxml_glosry.htm "Glossary Entry") or in the [canonical JSON format](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_asjson.htm) [asJSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasjson_glosry.htm "Glossary Entry"), depending on the target.
    
-   When an XSLT program is called, the ABAP data is serialized to the [canonical XML representation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml.htm), which is then used as the source of the XSL transformation. bn1 bn2 ... is used to specify the names of the XML elements that represent the ABAP data objects in the canonical XML representation.
    
-   When a simple transformation is called, the transformation has read-only access to the ABAP data using the names bn1 bn2 ....
    

Instead of using a static parameter list, the data objects can be passed dynamically as value pairs in the columns of an internal table stab that has the type ABAP\_TRANS\_SRCBIND\_TAB from the [type group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_group_1_glosry.htm "Glossary Entry") ABAP.

Serializations convert the elementary components of the ABAP data objects to [asXML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasxml_glosry.htm "Glossary Entry") or [asJSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasjson_glosry.htm "Glossary Entry"), in accordance with the [mappings for built-in ABAP types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_elementary.htm) or for [further XML schema data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_schema.htm). This can raise the exceptions described there, some of which can be bypassed by using [transformation options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation_options.htm).

The case of the names in the XML or JSON data depends on how they are specified in the ABAP runtime environment. If specified statically (b1, b2, ...), uppercase is used; if specified dynamically in stab, the case used there is used.

Note

When a simple transformation is called, the serialization always creates an internal [XML writer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_writer_glosry.htm "Glossary Entry") object, which can be addressed using the interface IF\_SXML\_WRITER from [sXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib.htm). The object is accessed using attributes of the ST statement [tt:call-method](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_call-method_static.htm).

Executable Examples

-   For an overview of all possible XML sources, see [XML Sources of Transformations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_trafo_sources_abexa.htm).
    
-   For a deserialization of ABAP data from an XML reader from sXML Library, see [sXML Library, Transformation from XML Reader](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensxml_trafo_from_reader_abexa.htm).
    

Addition 1b

... RESULT *{*XML rslt\_xml*}**|**{**{*bn1 = f1 bn2 = f2 ...*}**|*(rtab)*}*

Effect

Specifying the target.

Transformation to XML Data

When XML rslt\_xml is specified, a transformation to [XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_glosry.htm "Glossary Entry") data takes place and this data is passed to rslt\_xml. rslt\_xml can exist in the following forms:

-   As a variable with the type string or as a standard table with a flat character-like row type. The XML data returned by the transformation is stored in XML 1.0 format as a character string in the string or in the table. Here, a byte order mark (BOM) is used as a prefix.
    
-   As a variable with the type xstring or as a standard table with a flat byte-like row type. The XML data returned by the transformation is saved in XML 1.0 format and as a byte string in the string or table. The byte string represents the characters of the XML data in accordance with the code page UTF-8. A byte order mark (BOM) is not used as a prefix.
    
-   As an inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm), where a variable with the type xstring is created.
    
-   As an interface reference variable for objects in [iXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib.htm) (XSLT only):
    

-   Interface reference variable with the type IF\_IXML\_OSTREAM, pointing to an [output stream](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_input_output.htm) that writes XML data.

-   Interface reference variable with the type IF\_IXML\_DOCUMENT that points to an [XML document](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib_input_output.htm) in [DOM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendom_glosry.htm "Glossary Entry") representation.

-   As a reference variable with the type IF\_SXML\_WRITER or CL\_SXML\_WRITER for [XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_writer_glosry.htm "Glossary Entry") writers in [sXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib.htm). The result of the transformation is added to the current element of the writer as a subtree. Any valid writer can be specified:
    

-   XML writers for [XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_glosry.htm "Glossary Entry") data in XML 1.0 format.

-   XML writers for [XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_glosry.htm "Glossary Entry") data in [Binary XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbinary_xml_glosry.htm "Glossary Entry") format.

-   XOP writers for [XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_glosry.htm "Glossary Entry") data in [XOP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxop_glosry.htm "Glossary Entry") format.

-   JSON writers for [JSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenjson_glosry.htm "Glossary Entry") data. A transformation trans*|*(name) must create XML data in [JSON-XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenjson_xml_glosry.htm "Glossary Entry") format. The predefined [identity transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenid_trafo_glosry.htm "Glossary Entry") [ID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_json_trafo_id.htm) creates the corresponding data directly.
    

Notes

-   The interface IF\_SXML\_WRITER and the class CL\_SXML\_WRITER are part of the API of [sXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib.htm), whose objects can be accessed using CALL TRANSFORMATION.
    
-   Transformations to formats other than XML 1.0 are only possible with the appropriate writers in [sXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib.htm).
    
-   The interfaces IF\_IXML\_OSTREAM and IF\_IXML\_DOCUMENT are part of the API of the [iXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib.htm), whose objects can be accessed using CALL TRANSFORMATION.
    
-   For compatibility reasons, rslt\_xml can also be a class reference variable of the type CL\_FX\_WRITER. However, the class CL\_FX\_WRITER is replaced by CL\_SXML\_WRITER.
    
-   When XML data is saved in strings or internal tables, it is best to use byte strings or byte-like row types and the UTF-8 code page for the representation.
    
-   XML data that is written to [Unicode systems](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_system_glosry.htm "Glossary Entry") as character-like data cannot be processed as character-like data in a non-Unicode system, due to the byte order mark (BOM) that is predefined by the XML standard.
    
-   The methods CONVERT\_FROM and CONVERT\_TO from the class CL\_ABAP\_CODEPAGE can be used to transform character-like XML data or JSON data to a byte-like representation in accordance with a code page (and back).
    

Security Note

If the output method "html" of an XSL transformation is used to create HTML data that contains JavaScript parts, the syntax characters <, \>, &, ", and ' in the JavaScript parts are not transformed to their [XML notation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_oview.htm). To prevent cross site scripting (XSS) in HTML data that contains dynamic JavaScript parts, appropriate measures must be taken. These measures are best applied in the XSL transformation that creates the data.

Transformation to ABAP Data

bn1 = f1 ... or (rtab) are used to specify the ABAP target fields f1 f2 ... into which the XML data is transformed.

-   When the [identity transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID is called, the source must either be a [canonical XML display format](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml.htm) or a [canonical JSON display format](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_asjson.htm) for ABAP data. The canonical display format is deserialized in the ABAP data objects. bn1 bn2 ... is used to specify the names of the XML elements that represent the ABAP data objects in the canonical XML representation, and f1 f2 ... is used to specify ABAP data objects (appropriate to the data type) into which they are deserialized.
    
-   When an XSLT program is called, the result must represent the XSL transformation into a [canonical XML display format](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml.htm), which is deserialized into the ABAP data objects (like with the identity transformation).
    
-   When a simple transformation is called, the transformation performs writes on the ABAP data using the names bn1 bn2 ....
    

Instead of using a static parameter list, the data objects can be passed dynamically as value pairs to the columns of the internal table rtab that has the type ABAP\_TRANS\_RESBIND\_TAB from the [type group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_group_1_glosry.htm "Glossary Entry") ABAP.

Deserialization converts the elementary XML or JSON values to elementary ABAP data types in accordance with the [mappings for built-in ABAP types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_elementary.htm) or for [further XML schema data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_schema.htm). This can raise the exceptions described there, some of which can be bypassed by using [transformation options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation_options.htm).

The case used in the XML or JSON data must match exactly the case specified in the ABAP runtime environment. If specified statically (b1, b2, ...), uppercase is used; if specified dynamically in rtab, the case used there is used.

When deserializing from a canonical display format, if no corresponding asXML element or asJON object component exists for an ABAP object, the data object retains its previous value. If an empty XML element or an empty JSON array is assigned to an elementary or tabular ABAP data object, the ABAP data object is set to its type-dependent initial value. If an empty XML element or empty JSON object is assigned to a structure, this has the same effect as non-existent elements on the structure components. The structure components retain their previous values. The transformation option [clear](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation_options.htm) with the value "all" can be used to initialize all data objects that have nonexistent or empty elements assigned to them.

In the case of the deserialization of internal tables with non-unique [table keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key.htm), the order of the duplicate rows in relation to these keys is not retained.

Note

When a simple transformation is called, the deserialization always creates an internal [XML reader](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_reader_glosry.htm "Glossary Entry") object, which can be addressed using the interface IF\_SXML\_READER from [sXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib.htm). The object is accessed using attributes of the ST statement [tt:call-method](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_call-method_static.htm).

Executable Examples

-   For an overview of all possible XML targets, see [XML Targets of Transformations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_trafo_results_abexa.htm).
    
-   More information about the transformation of XML data to DOM representation in iXML Library is available in [iXML Library, DOM Representation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenixml_dom_abexa.htm).
    
-   For a transformation of ABAP data to an XML writer from sXML Library, see [sXML Library, Transformation to XML Writer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensxml_trafo_into_writer_abexa.htm).
    
-   More information about how to deserialize missing or empty asXML elements or asJSON object components is available in:
    

-   [Deserializing Missing Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_deserl_no_elem_abexa.htm)

-   [Deserializing Empty Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_deserl_no_elem_abexa.htm)

-   Information about transforming syntax characters in XML targets is available in [Transformation of Syntax Characters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_trafo_escaping_abexa.htm).
    

Addition 2

... PARAMETERS *{**{*p1 = e1 p2 = e2 ...*}**|*(ptab)*}*

Effect

This addition can be used to bind ABAP data objects e1 e2 ... to the parameters p1 p2 ... of an [XSL transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxsl_transformation_1_glosry.htm "Glossary Entry") or a [simple transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensimple_transformation_glosry.htm "Glossary Entry"). All elementary data objects and object references are permitted.

Instead of using a static parameter list, the parameters can be specified dynamically as value pairs in the columns of the internal table ptab that has one of the following types from the [type group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_group_1_glosry.htm "Glossary Entry") ABAP:

-   ABAP\_TRANS\_PARMBIND\_TAB for specifying strings,
    
-   ABAP\_TRANS\_OBJBIND\_TAB for specifying object references (for XSLT only),
    
-   ABAP\_TRANS\_PARM\_OBJ\_BIND\_TAB for specifying data references (for XSLT only).
    

Parameter Passing to XSL Transformations

The specified parameters must be defined in an XSL transformation as input parameters, as follows:

<xsl:param name="..." sap:type="..." /\>

Specify the parameter name for the attribute name in uppercase letters. Before a binding can take place, the case used in the XML document must match exactly the case specified in the ABAP runtime environment. If specified statically (b1, b2, ...), uppercase is used; if specified dynamically in rtab, the case used there is used.

For the optional attribute type, one of the type names string, number, boolean, nodeset, xstring, or object(...) can be defined, with a global ABAP class specified in parentheses behind object. The namespace before type must be defined as xmlns:sap="http://www.sap.com/sapxsl", with the prefix sap proposed as a convention.

If no type is specified in the transformation, the data types of elementary parameters are mapped to XSL types in accordance with the following table.

ABAP Data Type

XSL Parameter Type

c, d, n, string

string

i (b, s), f, p

number

x, xstring

string, where the content is represented in [Base 64](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbase64_glosry.htm "Glossary Entry").

If the XSL types shown in the table above are specified explicitly in the XSL transformation, appropriate elementary ABAP parameters must be specified that can be converted to the XSL type:

-   The XSL type boolean expects ABAP parameters of the type c with the length one. A blank is interpreted as "false" and any other character as "true".
    
-   The XSL type xstring expects ABAP parameters of the type x or xstring and the content is represented as hexadecimal.
    
-   The XSL types nodeset and object expect an object reference variable that points to an instance of a class. The type nodeset expects appropriate object properties.
    

If a parameter does not match the XSL type, a non-handleable exception is raised. If a parameter defined in the XSL transformation is not passed, it is set to a default value in the transformation. A specified parameter that is not defined in the XSL transformation is ignored.

Notes

-   The XSL types string, number, boolean, and nodeset are standard XSL types. xstring and object represent special SAP enhancements. The type xstring enables byte strings to be represented in hexadecimal instead of base 64. The type object enables ABAP methods to be called from the XSLT program.
    
-   The special addition [OBJECTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation_objects.htm) can be used to pass object references, but this addition is replaced by PARAMETERS.
    

Parameter Passing to ST Programs

In an ST program, the parameters must be defined as follows as parameters of the main template outside a template:

<tt:parameter name="..." *\[*kind="..."*\]*
                         *\[**\[*s-val="..."*\]**\[*d-val="..."*\]**\]**|**\[*val="..."*\]* />

When an ST program is called, output parameters and input/output parameters are supported as well as input parameters. The type of the parameter is defined using kind in the ST program, where "in", "out", and "inout" can be specified. "inout" is the default. The val attributes can be used to define replacement values.

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_TRANSFORMATION\_ERROR

-   Cause: Common superclass of all exception classes for CALL TRANSFORMATION. The direct subclasses are CX\_ST\_ERROR for simple transformations and CX\_XSLT\_EXCEPTION for XSL transformations. When the statement CALL TRANSFORMATION is executed, exceptions of the class CX\_TRANSFORMATION\_ERROR and almost all of its subclasses can be handled. In addition to this, the following exceptions may be raised when a transformation is executed:
    

-   Exceptions like those raised in [mappings from ABAP data types to asXML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_named.htm) cannot be handled directly. These exceptions raise exceptions of the class CX\_TRANSFORMATION\_ERROR (or its subclasses) and can be handled using these.

-   Exceptions raised in ABAP methods called in transformations (such as transformations of objects using the methods [SERIALIZE\_HELPER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasxml_class_instances.htm) and [DESERIALIZE\_HELPER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasxml_class_instances.htm) or when [accessing ABAP Objects from ST](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_abap_objects.htm)) raise exceptions of the class CX\_TRANSFORMATION\_ERROR (or its subclasses), if they are declared in the interface of the method [RAISING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_general.htm). Non-declared exceptions, on the other hand, raise the exception [CX\_SY\_NO\_HANDLER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions_procedures.htm), which cannot be handled using CX\_TRANSFORMATION\_ERROR (or its subclasses).

The attribute PREVIOUS of the corresponding exception object always contains a reference to the original exception. If an exception of this type is not handled, the [short dump](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshort_dump_glosry.htm "Glossary Entry") displays the original exception.

Subclasses of CX\_ST\_ERROR

CX\_ST\_CALL\_ERROR

-   Cause: Error when calling the transformation
    

CX\_ST\_CALL\_METHOD\_ERROR

-   Cause: Exception in an ABAP method called from the transformation
    

CX\_ST\_CONDITION

-   Cause: Error in a transformation condition
    

CX\_ST\_CONSTRAINT\_ERROR

-   Cause: Data object to be serialized or deserialized is too long.
    

CX\_ST\_DESERIALIZATION\_ERROR

-   Cause: Error in the deserialization
    

CX\_ST\_FORMAT\_ERROR

-   Cause: Format error in a node
    

CX\_ST\_INVALID\_XML

-   Cause: A serialization would produce invalid XML.
    

CX\_ST\_MATCH

-   Cause: Deserialization match failed
    

CX\_ST\_REF\_ACCESS

-   Cause: Error in data node access
    

CX\_ST\_RUNTIME\_ERROR

-   Cause: Error in execution of the transformation
    

CX\_ST\_SERIALIZATION\_ERROR

-   Cause: Error in the serialization
    

CX\_ST\_VALIDATION\_ERROR

-   Cause: Failed validation with the attribute xsd-type for the ST statements [tt:value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_value_elementary.htm), [tt:write](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_write.htm), or [tt:read](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_read.htm). This exception cannot be caught directly.
    

Subclasses of CX\_XSLT\_EXCEPTION

CX\_XSLT\_ABAP\_CALL\_ERROR

-   Cause: Error when calling an ABAP method from XSLT
    Runtime error XSLT\_METH\_ERROR
    

CX\_XSLT\_DESERIALIZATION\_ERROR

-   Cause: Error in the deserialization
    Runtime error: XML\_NOT\_SUPPORTED
    

CX\_XSLT\_FORMAT\_ERROR

-   Cause: Document is not in asXML format
    Runtime error: XML\_FORMAT\_ERROR
    

CX\_XSLT\_RUNTIME\_ERROR

-   Cause: Error in the XSLT processor
    Runtime error: UNCAUGHT\_EXCEPTION
    

CX\_XSLT\_SERIALIZATION\_ERROR

-   Cause: Error in the serialization
    Runtime error: XML\_NOT\_SUPPORTED
    

Continue
[CALL TRANSFORMATION - OPTIONS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation_options.htm)
[CALL TRANSFORMATION - Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_transformation_abexas.htm)