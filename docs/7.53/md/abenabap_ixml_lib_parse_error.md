  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_ixml_lib.htm) →  [iXML Library - Parsing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_ixml_lib_parse.htm) → 

iXML Library - Troubleshooting After Parsing

If a parser detects errors in the XML data while it is parsing, its method NUM\_ERRORS returns the number of errors. These can be analyzed using the objects created as follows:

DATA(error) = parser->get\_error( index = ... ).

The static type of the reference variable error is then the interface IF\_IXML\_PARSER\_ERROR. The number of the error can be passed to the parameter index. Counting begins at zero. If index has any other values, error remains initial.

Example

The parsed XML data contains tags that are not closed correctly, which means that parsing is canceled after the first incorrect tag. The parser corrects the first closing tag but does not write any further data to DOM. The method handle\_errors reads the errors.

DATA(ixml)           = cl\_ixml=>create( ).
DATA(stream\_factory) = ixml->create\_stream\_factory( ).
DATA(istream)        = stream\_factory->create\_istream\_string(
  \`<text1>aaa</text><text2>bbb</text>\`  ).
DATA(document)       = ixml->create\_document( ).
DATA(parser) = ixml->create\_parser(
                         stream\_factory = stream\_factory
                         istream        = istream
                         document       = document ).
IF parser->parse( ) <> ixml\_mr\_parser\_ok.
  handle\_errors( ).
  RETURN.
ENDIF.
...
METHOD handle\_errors.
  DO parser->num\_errors( ) TIMES.
    DATA(error)  = parser->get\_error( index = sy-index - 1 ).
    DATA(line)   = error->get\_line( ).
    DATA(column) = error->get\_column( ).
    DATA(reason) = error->get\_reason( ).
    ...
  ENDDO.
ENDMETHOD.