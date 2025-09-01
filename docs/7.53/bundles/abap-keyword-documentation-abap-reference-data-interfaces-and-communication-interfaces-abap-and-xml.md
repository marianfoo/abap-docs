# ABAP Keyword Documentation / ABAP − Reference / Data Interfaces and Communication Interfaces / ABAP and XML / Transformations for XML / CALL TRANSFORMATION / CALL TRANSFORMATION - Examples

Included pages: 7



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.53](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencall_transformation_abexas.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transformation_abexas.htm)
- [abencall_trafo_sources_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_trafo_sources_abexa.htm)
- [abencall_trafo_results_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_trafo_results_abexa.htm)
- [abenabap_deserl_no_elem_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_deserl_no_elem_abexa.htm)
- [abenabap_deserl_empt_elem_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_deserl_empt_elem_abexa.htm)
- [abencall_trafo_escaping_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_trafo_escaping_abexa.htm)
- [abencall_trafo_upper_lower_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_trafo_upper_lower_abexa.htm)

**Bundle Contains**: 7 documentation pages
**Version**: ABAP 7.53
**Generated**: 2025-09-01T11:25:46.184Z

---

### abencall_transformation_abexas.htm

> **📖 Official SAP Documentation**: [abencall_transformation_abexas.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transformation_abexas.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) → 

CALL TRANSFORMATION - Examples

Continue
![Example](exa.gif "Example") [XML Sources of Transformations](javascript:call_link\('abencall_trafo_sources_abexa.htm'\))
![Example](exa.gif "Example") [XML Targets of Transformations](javascript:call_link\('abencall_trafo_results_abexa.htm'\))
![Example](exa.gif "Example") [Deserializing Missing Elements](javascript:call_link\('abenabap_deserl_no_elem_abexa.htm'\))
![Example](exa.gif "Example") [Deserializing Empty Elements](javascript:call_link\('abenabap_deserl_empt_elem_abexa.htm'\))
![Example](exa.gif "Example") [Transformation of XML Syntax Characters](javascript:call_link\('abencall_trafo_escaping_abexa.htm'\))
![Example](exa.gif "Example") [Transformation of XML Element Names](javascript:call_link\('abencall_trafo_upper_lower_abexa.htm'\))



**📖 Source**: [abencall_transformation_abexas.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transformation_abexas.htm)

### abencall_trafo_sources_abexa.htm

> **📖 Official SAP Documentation**: [abencall_trafo_sources_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_trafo_sources_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) →  [CALL TRANSFORMATION - Examples](javascript:call_link\('abencall_transformation_abexas.htm'\)) → 

XML Sources of Transformations

This example demonstrates the possible XML sources of the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)).

Source Code

REPORT demo\_call\_trafo\_xml\_sources.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA xml TYPE xstring.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( \`XML-Sources for CALL TRANSFORMATION\` ).
    "XML 1.0
    out->begin\_section( \`XML 1.0\` ).
    "XML 1.0 in string
    out->begin\_section( \`XML 1.0 in Text String\` ).
    DATA(xml\_str) = \`<text>Hello XML!</text>\`.
    CALL TRANSFORMATION id SOURCE XML xml\_str
                           RESULT XML xml.
    out->write\_xml( xml ).
    "XML 1.0 in text table
    out->next\_section( \`XML 1.0 in Table of Text Fields\` ).
    TYPES c10 TYPE c LENGTH 10.
    DATA xml\_tab TYPE STANDARD TABLE OF c10 WITH DEFAULT KEY.
    xml\_tab =
      VALUE #( LET l1 = strlen( xml\_str ) l2 = l1 - 10 IN
               FOR j = 0 THEN j + 10  UNTIL j >= l1
                ( COND #( WHEN j <= l2 THEN
                            xml\_str+j(10)
                          ELSE
                            xml\_str+j ) ) ).
    CALL TRANSFORMATION id SOURCE XML xml\_tab
                           RESULT XML xml.
    out->write\_xml( xml ).
    "XML 1.0 in xstring
    out->next\_section( \`XML 1.0 in Byte String\` ).
    DATA(xml\_xstr) = cl\_abap\_conv\_codepage=>create\_out(
      )->convert( xml\_str ).
    CALL TRANSFORMATION id SOURCE XML xml\_xstr
                           RESULT XML xml.
    out->write\_xml( xml ).
    "XML 1.0 in byte table
    out->next\_section( \`XML 1.0 in Table of Byte Fields\` ).
    TYPES x10 TYPE x LENGTH 10.
    DATA xml\_xtab TYPE STANDARD TABLE OF x10 WITH DEFAULT KEY.
    xml\_xtab =
      VALUE #( LET l1 = xstrlen( xml\_xstr ) l2 = l1 - 10 IN
               FOR j = 0 THEN j + 10  UNTIL j >= l1
                ( COND #( WHEN j <= l2 THEN
                            xml\_xstr+j(10)
                          ELSE
                            xml\_xstr+j ) ) ).
    CALL TRANSFORMATION id SOURCE XML xml\_xtab
                           RESULT XML xml.
    out->write\_xml( xml ).
    "XML 1.0 in iXML input stream
    out->next\_section( \`XML 1.0 from Input Stream\` ).
    DATA(ixml) = cl\_ixml=>create( ).
    DATA(istream) = ixml->create\_stream\_factory(
                      )->create\_istream\_xstring( xml\_xstr ).
    CALL TRANSFORMATION id SOURCE XML istream
                           RESULT XML xml.
    out->write\_xml( xml ).
    "XML 1.0 in iXML DOM
    out->next\_section( \`XML 1.0 in DOM\` ).
    DATA(dom) = ixml->create\_document( ).
    DATA(parser) = ixml->create\_parser(
                     document = dom
                     stream\_factory = ixml->create\_stream\_factory( )
                     istream = ixml->create\_stream\_factory(
                        )->create\_istream\_xstring( xml\_xstr ) ).
    parser->parse( ).
    CALL TRANSFORMATION id SOURCE XML dom
                           RESULT XML xml.
    out->write\_xml( xml ).
    "XML 1.0 in XML-Reader
    out->next\_section( \`XML 1.0 from XML Reader\` ).
    DATA(xml\_reader) = cl\_sxml\_string\_reader=>create( xml\_xstr ).
    CALL TRANSFORMATION id SOURCE XML xml\_reader
                           RESULT XML xml.
    out->write\_xml( xml
      )->end\_section( ).
    "Binary XML
    out->next\_section( \`Binary XML\` ).
    xml\_reader = cl\_sxml\_string\_reader=>create(
                   cl\_abap\_conv\_codepage=>create\_out( )->convert(
                     \`<text>Hello binary XML!</text>\` ) ).
    DATA(binary\_xml\_writer) =
      cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_binary ).
    xml\_reader->next\_node( ).
    xml\_reader->skip\_node( binary\_xml\_writer ).
    "Binary XML in xstring
    out->begin\_section( \`Binary XML in Byte String\` ).
    DATA(binary\_xml\_xstr) = binary\_xml\_writer->get\_output( ).
    CALL TRANSFORMATION id SOURCE XML binary\_xml\_xstr
                           RESULT XML xml.
    out->write\_xml( xml ).
    "Binary XML in byte table
    out->next\_section( \`Binary XML in Byte Table\` ).
    DATA binary\_xml\_xtab TYPE STANDARD TABLE OF x10 WITH DEFAULT KEY.
    binary\_xml\_xtab =
      VALUE #( LET l1 = xstrlen( binary\_xml\_xstr ) l2 = l1 - 10 IN
               FOR j = 0 THEN j + 10  UNTIL j >= l1
                ( COND #( WHEN j <= l2 THEN
                            binary\_xml\_xstr+j(10)
                          ELSE
                            binary\_xml\_xstr+j ) ) ).
    CALL TRANSFORMATION id SOURCE XML binary\_xml\_xtab
                           RESULT XML xml.
    out->write\_xml( xml ).
    "Binary XML in XML-Reader
    out->next\_section( \`Binary XML from XML Reader\` ).
    DATA(binary\_xml\_reader) = cl\_sxml\_string\_reader=>create(
                                binary\_xml\_xstr ).
    CALL TRANSFORMATION id SOURCE XML binary\_xml\_reader
                           RESULT XML xml.
    out->write\_xml( xml
      )->end\_section( ).
    "XOP
    out->next\_section( \`XOP\` ).
    xml\_reader = cl\_sxml\_string\_reader=>create(
                   cl\_abap\_conv\_codepage=>create\_out( )->convert(
                     \`<text>Hello XOP!</text>\` ) ).
    DATA(xop\_writer) =
      cl\_sxml\_xop\_writer=>create( ).
    xml\_reader->next\_node( ).
    xml\_reader->skip\_node( xop\_writer ).
    DATA(xop\_package) = xop\_writer->get\_output( ).
    "XOP in XML-Reader
    out->begin\_section( \`XOP from XML Reader\` ).
    DATA(xop\_reader) = cl\_sxml\_xop\_reader=>create( xop\_package ).
    CALL TRANSFORMATION id SOURCE XML xop\_reader
                           RESULT XML xml.
    out->write\_xml( xml
      )->end\_section( ).
    "JSON
    out->next\_section( \`JSON\` ).
    "JSON in string
    out->begin\_section( \`JSON in Text String\` ).
    DATA(json\_str) = \`{"TEXT":"Hello JSON!"}\`.
    CALL TRANSFORMATION id SOURCE XML json\_str
                           RESULT XML xml.
    out->write\_xml( xml ).
    "JSON in text table
    out->next\_section( \`JSON in Table of Text Fields\` ).
    DATA json\_tab TYPE STANDARD TABLE OF c10 WITH DEFAULT KEY.
    json\_tab =
      VALUE #( LET l1 = strlen( json\_str ) l2 = l1 - 10 IN
               FOR j = 0 THEN j + 10  UNTIL j >= l1
                ( COND #( WHEN j <= l2 THEN
                            json\_str+j(10)
                          ELSE
                            json\_str+j ) ) ).
    CALL TRANSFORMATION id SOURCE XML json\_tab
                           RESULT XML xml.
    out->write\_xml( xml ).
    "JSON in xstring
    out->next\_section( \`JSON in Byte String\` ).
    DATA(json\_xstr) = cl\_abap\_conv\_codepage=>create\_out(
                        )->convert( json\_str ).
    CALL TRANSFORMATION id SOURCE XML json\_xstr
                           RESULT XML xml.
    out->write\_xml( xml ).
    "JSON in byte table
    out->next\_section( \`JSON in Table of Byte Fields\` ).
    DATA json\_xtab TYPE STANDARD TABLE OF x10 WITH DEFAULT KEY.
    json\_xtab =
      VALUE #( LET l1 = xstrlen( json\_xstr ) l2 = l1 - 10 IN
               FOR j = 0 THEN j + 10  UNTIL j >= l1
                ( COND #( WHEN j <= l2 THEN
                            json\_xstr+j(10)
                          ELSE
                            json\_xstr+j ) ) ).
    CALL TRANSFORMATION id SOURCE XML json\_xtab
                           RESULT XML xml.
    out->write\_xml( xml ).
    "JSON in XML-Reader
    out->next\_section( \`JSON from XML Reader\` ).
    DATA(json\_reader) = cl\_sxml\_string\_reader=>create( json\_xstr ).
    CALL TRANSFORMATION id SOURCE XML json\_reader
                           RESULT XML xml.
    out->write\_xml( xml
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID is called with all XML sources for which a format is possible, in the order of the formats. The XML target is always a byte string, which is produced after each successful transformation.



**📖 Source**: [abencall_trafo_sources_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_trafo_sources_abexa.htm)

### abencall_trafo_results_abexa.htm

> **📖 Official SAP Documentation**: [abencall_trafo_results_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_trafo_results_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) →  [CALL TRANSFORMATION - Examples](javascript:call_link\('abencall_transformation_abexas.htm'\)) → 

XML Targets of Transformations

This example demonstrates the possible XML targets of the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)).

Source Code

REPORT demo\_call\_trafo\_xml\_results.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = CL\_DEMO\_OUTPUT=>NEW(
      )->begin\_section(
      \`XML Results for CALL TRANSFORMATION\` ).
    DATA(xml) = cl\_abap\_conv\_codepage=>create\_out( )->convert(
                 \`<object>\` &&
                 \` <str name="TEXT">Hello Writers!</str>\` &&
                 \`</object>\` ).
    "Strings
    out->begin\_section( \`Strings\` ).
    "string
    out->begin\_section( \`Text String\` ).
    DATA(xml\_str) = VALUE string( ).
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT XML xml\_str.
    out->write\_xml( xml\_str ).
    "xstring
    out->next\_section( \`Byte String\` ).
    DATA(xml\_xstr) = VALUE xstring( ).
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT XML xml\_xstr.
    out->write\_xml( xml\_xstr
      )->end\_section( ).
    "Internal tables
    out->next\_section( \`Internal Tables\` ).
    "Text table
    out->begin\_section( \`Table of Text Fields\` ).
    TYPES c10 TYPE c LENGTH 10.
    DATA xml\_tab TYPE STANDARD TABLE OF c10 WITH DEFAULT KEY.
    CALL TRANSFORMATION id SOURCE XML xml
                        RESULT XML xml\_tab.
    out->write\_xml( concat\_lines\_of( xml\_tab ) ).
    "Byte table
    out->next\_section( \`Table of Byte Fields\` ).
    TYPES x10 TYPE x LENGTH 10.
    DATA xml\_xtab TYPE STANDARD TABLE OF x10 WITH DEFAULT KEY.
    CALL TRANSFORMATION id SOURCE XML xml
                        RESULT XML xml\_xtab.
    CONCATENATE LINES OF xml\_xtab INTO xml\_xstr IN BYTE MODE.
    out->write\_xml( xml\_xstr
      )->end\_section( ).
    "iXML
    out->next\_section( \`iXML Library\` ).
    "Output stream
    out->begin\_section( \`Output Stream\` ).
    DATA(ixml) = cl\_ixml=>create( ).
    CLEAR xml\_xstr.
    DATA(ostream) = ixml->create\_stream\_factory(
                      )->create\_ostream\_xstring( xml\_xstr ).
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT XML ostream.
    out->write\_xml( xml\_xstr ).
    "DOM
    out->next\_section( \`DOM\` ).
    DATA(dom) = ixml->create\_document( ).
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT XML dom.
    CLEAR xml\_xstr.
    dom->render( ixml->create\_stream\_factory(
                         )->create\_ostream\_xstring( xml\_xstr ) ).
    out->write\_xml( xml\_xstr
      )->end\_section( ).
    "sXML
    out->next\_section( \`sXML Library\` ).
    "XML 1.0 writer
    out->begin\_section( \`XML 1.0 Writer\` ).
    DATA(xml\_writer) = cl\_sxml\_string\_writer=>create(
                         type = if\_sxml=>co\_xt\_xml10 ).
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT XML xml\_writer.
    out->write\_xml( xml\_writer->get\_output( ) ).
    "Binary XML writer
    out->next\_section( \`Binary XML Writer\` ).
    DATA(binary\_xml\_writer) = cl\_sxml\_string\_writer=>create(
                                type = if\_sxml=>co\_xt\_binary ).
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT XML binary\_xml\_writer.
    out->write\_xml( binary\_xml\_writer->get\_output( ) ).
    "XOP writer
    out->next\_section( \`XOP Writer\` ).
    DATA(xop\_writer) = cl\_sxml\_xop\_writer=>create( ).
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT XML xop\_writer.
    DATA(xop\_package) = xop\_writer->get\_output( ).
    out->write\_xml( xop\_package-xop\_document ).
    "JSON writer
    out->next\_section( \`JSON Writer\` ).
    DATA(json\_writer) = cl\_sxml\_string\_writer=>create(
                                type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT XML json\_writer.
    out->write\_json( json\_writer->get\_output( )
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID is called for all possible XML targets and the result is displayed. The XML source is always the same byte string, which contains the XML data in JSON-XML format.



**📖 Source**: [abencall_trafo_results_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_trafo_results_abexa.htm)

### abenabap_deserl_no_elem_abexa.htm

> **📖 Official SAP Documentation**: [abenabap_deserl_no_elem_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_deserl_no_elem_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) →  [CALL TRANSFORMATION - Examples](javascript:call_link\('abencall_transformation_abexas.htm'\)) → 

Deserializing Missing Elements

This example demonstrates the deserialization of empty elements.

Source Code

REPORT demo\_asxml\_asjson\_no\_vals.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( \`asXML\` ).
    DATA elem TYPE i VALUE 111.
    DATA: BEGIN OF struc,
           col TYPE i VALUE 111,
          END OF struc.
    DATA itab TYPE TABLE OF i.
    itab = VALUE #( ( 111 ) ).
    out->begin\_section( \`ABAP Data Objects\`
      )->write\_data( elem
      )->write\_data( struc
      )->write\_data( itab ).
    out->next\_section(
      \`ABAP Data Objects serialized to asXML\` ).
    DATA xml TYPE string.
    CALL TRANSFORMATION id SOURCE elem = elem
                                  struc = struc
                                  itab = itab
                           RESULT XML xml.
    out->write\_xml( xml ).
    out->next\_section( \`Modified asXML\` ).
    REPLACE \`<ELEM>111</ELEM>\` IN xml WITH \`\`.
    REPLACE \`<STRUC><COL>111</COL></STRUC>\` IN xml WITH \`\`.
    REPLACE \`<ITAB><item>111</item></ITAB>\` IN xml WITH \`\`.
    out->write\_xml( xml ).
    out->next\_section(
      \`ABAP Data Objects after Deserialization of asXML\` ).
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT elem = elem
                                  struc = struc
                                  itab = itab.
    out->write\_data( elem
      )->write\_data( struc
      )->write\_data( itab
      )->end\_section( ).
    out->next\_section(
      \`ABAP Data Objects after Deserialization with Clearing\` ).
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT elem = elem
                                  struc = struc
                                  itab = itab
                          OPTIONS clear = 'all'.
    out->write\_data( elem
      )->write\_data( struc
      )->write\_data( itab
      )->end\_section( ).
    out->next\_section( \`asJSON\` ).
    elem = 111.
    struc-col = 111.
    itab = VALUE #( ( 111 ) ).
    out->begin\_section( \`ABAP Data Objects\`
       )->write\_data( elem
       )->write\_data( struc
       )->write\_data( itab ).
    out->next\_section(
      \`ABAP Data Objects serialized to asJSON\` ).
    DATA(writer) = cl\_sxml\_string\_writer=>create(
                     type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE elem = elem
                                  struc = struc
                                  itab = itab
                           RESULT XML writer.
    DATA(json) = cl\_abap\_conv\_codepage=>create\_in( )->convert(
                   writer->get\_output( ) ).
    out->write\_json( json ).
    out->next\_section( \`Modified asJSON\` ).
    json = \`{ }\`.
    out->write\_json( json ).
    out->next\_section(
      \`ABAP Data Objects after Deserialization of asJSON\` ).
    CALL TRANSFORMATION id SOURCE XML json
                           RESULT elem = elem
                                  struc = struc
                                  itab = itab.
    out->write\_data( elem
      )->write\_data( struc
      )->write\_data( itab ).
    out->next\_section(
      \`ABAP Data Objects after Deserialization with Clearing\` ).
    CALL TRANSFORMATION id SOURCE XML json
                           RESULT elem = elem
                                  struc = struc
                                  itab = itab
                          OPTIONS clear = 'all'.
    out->write\_data( elem
      )->write\_data( struc
      )->write\_data( itab
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

An elementary data object, a structure and an internal table are transformed using the [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID into [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") and [asJSON](javascript:call_link\('abenasjson_glosry.htm'\) "Glossary Entry") display formats. With the asXML and asJSON display formats, all elements or object components are removed.

When a standard deserialization into the original ABAP data objects is performed, the objects retain their original values. If the transformation option [clear](javascript:call_link\('abapcall_transformation_options.htm'\)) is used with the value "all", all ABAP data objects are initialized.

Note

The modification of XML and JSON data using string processing is only shown here to make the example clearer. In production programs, the APIs of [class libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) should be used.



**📖 Source**: [abenabap_deserl_no_elem_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_deserl_no_elem_abexa.htm)

### abenabap_deserl_empt_elem_abexa.htm

> **📖 Official SAP Documentation**: [abenabap_deserl_empt_elem_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_deserl_empt_elem_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) →  [CALL TRANSFORMATION - Examples](javascript:call_link\('abencall_transformation_abexas.htm'\)) → 

Deserializing Empty Elements

This example demonstrates the deserialization of empty elements.

Source Code

REPORT demo\_asxml\_asjson\_empty\_vals.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( \`asXML\` ).
    DATA elem TYPE i VALUE 111.
    DATA: BEGIN OF struc,
           col TYPE i VALUE 111,
          END OF struc.
    DATA itab TYPE TABLE OF i.
    itab = VALUE #( ( 111 ) ).
    out->begin\_section( \`ABAP Data Objects\`
      )->write\_data( elem
      )->write\_data( struc
      )->write\_data( itab ).
    out->next\_section(
      \`ABAP Data Objects serialized to asXML\` ).
    DATA xml TYPE string.
    CALL TRANSFORMATION id SOURCE elem = elem
                                  struc = struc
                                  itab = itab
                           RESULT XML xml.
    out->write\_xml( xml ).
    out->next\_section( \`Modified asXML\` ).
    REPLACE \`<ELEM>111</ELEM>\` IN xml WITH \`<ELEM />\`.
    REPLACE \`<STRUC><COL>111</COL></STRUC>\` IN xml WITH \`<STRUC />\`.
    REPLACE \`<ITAB><item>111</item></ITAB>\` IN xml WITH \`<ITAB />\`.
    out->write\_xml( xml ).
    out->next\_section(
      \`ABAP Data Objects after Deserialization of asXML\` ).
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT elem = elem
                                  struc = struc
                                  itab = itab.
    out->write\_data( elem
      )->write\_data( struc
      )->write\_data( itab
      )->end\_section( ).
    out->next\_section(
      \`ABAP Data Objects after Deserialization with Clearing\` ).
    CALL TRANSFORMATION id SOURCE XML xml
                           RESULT elem = elem
                                  struc = struc
                                  itab = itab
                          OPTIONS clear = 'all'.
    out->write\_data( elem
      )->write\_data( struc
      )->write\_data( itab
      )->end\_section( ).
    out->next\_section( \`asJSON\` ).
    elem = 111.
    struc-col = 111.
    itab = VALUE #( ( 111 ) ).
    out->begin\_section( \`ABAP Data Objects\`
      )->write\_data( elem
      )->write\_data( struc
      )->write\_data( itab ).
    out->next\_section(
      \`ABAP Data Objects serialized to asJSON\` ).
    DATA(writer) = cl\_sxml\_string\_writer=>create(
                     type = if\_sxml=>co\_xt\_json ).
    CALL TRANSFORMATION id SOURCE elem = elem
                                  struc = struc
                                  itab = itab
                           RESULT XML writer.
    DATA(json) = cl\_abap\_conv\_codepage=>create\_in( )->convert(
                   writer->get\_output( ) ).
    out->write\_json( json ).
    out->next\_section( \`Modified asJSON\` ).
    REPLACE \`"ELEM":111\` IN json WITH \`"ELEM":0\`.
    REPLACE \`"COL":111\` IN json WITH \`\`.
    REPLACE \`111\` IN json WITH \`\`.
    out->write\_json( json ).
    out->next\_section(
      \`ABAP Data Objects after Deserialization of asJSON\` ).
    CALL TRANSFORMATION id SOURCE XML json
                           RESULT elem = elem
                                  struc = struc
                                  itab = itab.
    out->write\_data( elem
      )->write\_data( struc
      )->write\_data( itab ).
    out->next\_section(
      \`ABAP Data Objects after Deserialization with Clearing\` ).
    CALL TRANSFORMATION id SOURCE XML json
                           RESULT elem = elem
                                  struc = struc
                                  itab = itab
                          OPTIONS clear = 'all'.
    out->write\_data( elem
      )->write\_data( struc
      )->write\_data( itab
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

An elementary data object, a structure and an internal table are transformed using the [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID into [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") and [asJSON](javascript:call_link\('abenasjson_glosry.htm'\) "Glossary Entry") display formats. With asXML display format, the values of all elements are removed. With asJSON display format, only the components from objects and arrays can be removed.

After deserialization into the original ABAP data objects, the elementary data object and the internal table are initial. However, the empty element in the structure is interpreted as a missing component and the structure component retains its previous value. If the transformation option [clear](javascript:call_link\('abapcall_transformation_options.htm'\)) is used with the value "all", all ABAP data objects are initialized.

Note

The modification of XML and JSON data using string processing is only shown here to make the example clearer. In production programs, the APIs of [class libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) should be used.



**📖 Source**: [abenabap_deserl_empt_elem_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_deserl_empt_elem_abexa.htm)

### abencall_trafo_escaping_abexa.htm

> **📖 Official SAP Documentation**: [abencall_trafo_escaping_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_trafo_escaping_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) →  [CALL TRANSFORMATION - Examples](javascript:call_link\('abencall_transformation_abexas.htm'\)) → 

Transformation of XML Syntax Characters

This example demonstrates the serialization of characters from the XML syntax using various transformations.

Source Code

REPORT demo\_transformation\_escaping.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA xml TYPE string.
    DATA(text) = \`<>&"\`.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( \`Text\`
      )->write( text
      )->next\_section( \`XSLT\`
      )->begin\_section( \`<xsl:output method="text" />\` ).
    CALL TRANSFORMATION demo\_escaping\_text SOURCE text = text
                                           RESULT XML xml.
    out->write( xml
      )->next\_section( \`<xsl:output method="xml" />\` ).
    CALL TRANSFORMATION demo\_escaping\_xml SOURCE text = text
                                          RESULT XML xml.
    out->write( xml
      )->next\_section( \`<xsl:output method="html" />\` ).
    CALL TRANSFORMATION demo\_escaping\_html SOURCE text = text
                                           RESULT XML xml.
    out->write( xml
      )->next\_section( \`<xsl:output method="html" />\` ).
    CALL TRANSFORMATION demo\_escaping\_js SOURCE text = text
                                         RESULT XML xml.
    out->write( xml
      )->end\_section(
      )->next\_section( \`ST\` ).
    CALL TRANSFORMATION demo\_escaping\_st SOURCE text = text
                                         RESULT XML xml.
    out->write( xml ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Four XSLT programs with different output methods are called and an ST program for serializing a text string containing the syntax characters <>&". The results are as follows:

-   No replacements are made in the results of the XSL transformation DEMO\_ESCAPING\_TEXT with the output method "text".

-   In the results of the XSL transformation DEMO\_ESCAPING\_XML with the output method "xml", the syntax characters <, \> and & are replaced by &lt;, &gt;, and &amp;.

-   In the results of the XSL transformation DEMO\_ESCAPING\_HTML with the output method "xml", the syntax characters <, \> and & are replaced by &lt;, &gt;, and &amp;.

-   In the results of the XSL transformation DEMO\_ESCAPING\_JS with the output method "html", the syntax characters are not replaced because they are part of JavaScript.

The results of the simple transformation DEMO\_ESCAPING\_ST match the XSL transformation with the output method "xml". Also, the text string is displayed here as an attribute in which the syntax character " is replaced by &quot;.



**📖 Source**: [abencall_trafo_escaping_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_trafo_escaping_abexa.htm)

### abencall_trafo_upper_lower_abexa.htm

> **📖 Official SAP Documentation**: [abencall_trafo_upper_lower_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_trafo_upper_lower_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencall_trafo_upper_lower_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_trafo_upper_lower_abexa.htm)


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) →  [CALL TRANSFORMATION - Examples](javascript:call_link\('abencall_transformation_abexas.htm'\)) → 

Transformation of XML Element Names

This example demonstrates the transformation of letters in XML element names.

Source Code

REPORT demo\_trafo\_upper\_lower.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    DATA: BEGIN OF simple\_struc,
            int\_col1 TYPE i VALUE 111,
            int\_col2 TYPE i VALUE 222,
          END OF simple\_struc.
    out->begin\_section( \`Serialization\` ).
    CALL TRANSFORMATION id
                        SOURCE simple\_struc = simple\_struc
                        RESULT XML DATA(asxml).
    out->begin\_section( \`ID\`
      )->write\_xml( asxml ).
    CALL TRANSFORMATION demo\_id\_upper\_lower
                        PARAMETERS mode = 'LO'
                        SOURCE simple\_struc = simple\_struc
                        RESULT XML DATA(xml\_lower).
    out->next\_section( \`DEMO\_ID\_UPPER\_LOWER\`
      )->write\_xml( xml\_lower ).
    CALL TRANSFORMATION demo\_id\_from\_to\_mixed
                        PARAMETERS mode = 'TO'
                        SOURCE simple\_struc = simple\_struc
                        RESULT XML DATA(xml\_camel).
    out->next\_section( \`DEMO\_ID\_FROM\_TO\_MIXED\`
      )->write\_xml( xml\_camel ).
    out->end\_section(
      )->next\_section( \`Deserialization\` ).
    CLEAR simple\_struc.
    CALL TRANSFORMATION id
                        SOURCE XML xml\_lower
                        RESULT simple\_struc = simple\_struc.
    out->begin\_section( \`ID for XML\_LOWER\`
      )->write( simple\_struc ).
    CLEAR simple\_struc.
    CALL TRANSFORMATION id
                        SOURCE XML xml\_camel
                        RESULT simple\_struc = simple\_struc.
    out->next\_section( \`ID for XML\_CAMEL\`
      )->write( simple\_struc ).
    CLEAR simple\_struc.
    CALL TRANSFORMATION demo\_id\_upper\_lower
                        SOURCE XML xml\_lower
                        RESULT simple\_struc = simple\_struc.
    out->next\_section( \`DEMO\_ID\_UPPER\_LOWER for XML\_LOWER\`
      )->write( simple\_struc ).
    CLEAR simple\_struc.
    CALL TRANSFORMATION demo\_id\_from\_to\_mixed
                        SOURCE XML xml\_camel
                        RESULT simple\_struc = simple\_struc.
    out->next\_section( \`DEMO\_ID\_FROM\_TO\_MIXED for XML\_CAMEL\`
      )->write( simple\_struc ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In deserializations of XML data to ABAP data, the XML elements in question must generally be written in uppercase letters to be identified. This example shows ways of transforming elements written in other ways using self-written XSL transformations.

-   A structure, simple\_struc, is serialized using various XSL transformations.

-   The [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID creates [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") with XML element names in uppercase letters.

-   The self-written XSL transformation DEMO\_ID\_UPPER\_LOWER transforms the XML element names created by the serialization to lowercase letters, if the correct parameter passing is used.

-   The self-written XSL transformation DEMO\_ID\_FROM\_TO\_MIXED transforms the XML element names created by the serialization to Mixed Case Style (also known as Camel Case Style), if the correct parameter passing is used. To do this, an ABAP method is called from the transformation and this method itself calls the built-in function [to\_mixed](javascript:call_link\('abencase_functions.htm'\)).

-   Deserializations of the transformed asXML data with the [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID do not find the structure or the components.

-   Deserializations of the transformed asXML data with the self-written XSL transformations, on the other hand, are successful.

-   DEMO\_ID\_UPPER\_LOWER also transforms lowercase letters to uppercase letters.

-   DEMO\_ID\_FROM\_TO\_MIXED also calls a method for [to\_mixed](javascript:call_link\('abencase_functions.htm'\)). This simple example transformations is not, however, symmetrical in all cases.

Instead of transformations, parsers and renderers can be used, as demonstrated in the executable example for [JSON](javascript:call_link\('abenabap_json_names_to_upper_abexa.htm'\)). The serial processing used here can be useful when dealing with large volumes of data.

The transformations used are as follows:

DEMO\_ID\_UPPER\_LOWER

<xsl:transform version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sap="http://www.sap.com/sapxsl"
  xmlns:asx="http://www.sap.com/abapxml">
  <xsl:variable name="smallcase" select="'abcdefghijklmnopqrstuvwxyz'"/>
  <xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
<xsl:param name="MODE" select="'UP'"/>
<xsl:template match="\*">
  <xsl:element name="{sap:if($MODE='LO',
         translate(name(),$uppercase, $smallcase ),
         translate(name(),$smallcase, $uppercase ))}">
    <xsl:copy-of select="@\*"/>
    <xsl:apply-templates select="node()"/>
  </xsl:element>
</xsl:template>
<xsl:template match="asx:\*">
  <xsl:copy>
    <xsl:copy-of select="@\*"/>
    <xsl:apply-templates select="node()"/>
  </xsl:copy>
</xsl:template>
<xsl:template match="text() | processing-instruction() | comment()">
  <xsl:copy/>
</xsl:template>
</xsl:transform>

DEMO\_ID\_FROM\_TO\_MIXED

<xsl:transform version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sap="http://www.sap.com/sapxsl"
  xmlns:asx="http://www.sap.com/abapxml"
  xmlns:f="FCT" exclude-result-prefixes="f">
<sap:external-function name="f:toCC" kind="class"
class="CL\_DEMO\_XSLT\_FROM\_TO\_MIXED" method="TO\_CAMEL\_CASE">
  <sap:argument param="IN"  type="string"/>
  <sap:result   param="OUT" type="string"/>
</sap:external-function>
<sap:external-function name="f:fromCC" kind="class"
class="CL\_DEMO\_XSLT\_FROM\_TO\_MIXED" method="FROM\_CAMEL\_CASE">
  <sap:argument param="IN"  type="string"/>
  <sap:result   param="OUT" type="string"/>
</sap:external-function>
<xsl:param name="MODE" select="'FROM'"/>
<xsl:template match="\*">
  <xsl:element name="{sap:if($MODE='TO',
                      f:toCC(name()),
                      f:fromCC(name()))}">
    <xsl:copy-of select="@\*"/>
    <xsl:apply-templates select="node()"/>
  </xsl:element>
</xsl:template>
<xsl:template match="asx:\*">
  <xsl:copy>
    <xsl:copy-of select="@\*"/>
    <xsl:apply-templates select="node()"/>
  </xsl:copy>
</xsl:template>
<xsl:template match="text() | processing-instruction() | comment()">
  <xsl:copy/>
</xsl:template>
</xsl:transform>
