  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Class Libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) →  [iXML Library - Parse](javascript:call_link\('abenabap_ixml_lib_parse.htm'\)) → 

iXML Library - Troubleshooting After Parsing

If a parser detects errors in the XML data while it is parsing, its method NUM\_ERRORS returns the number of errors. These can be analyzed using the objects created as follows:

DATA(error) = parser->get\_error( index = ... ).

The static type of the reference variable error is then the interface IF\_IXML\_PARSER\_ERROR. The number of the error can be passed to the parameter index. Counting begins at zero. If index has any other values, error remains initial.

Example

The parsed XML data contains tags that are not closed correctly, which means that parsing is canceled after the first incorrect tag. The parser corrects the first closing tag but does not write any further data to DOM. The method handle\_errors reads the errors.

DATA(ixml)  = cl\_ixml=>create( ).
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