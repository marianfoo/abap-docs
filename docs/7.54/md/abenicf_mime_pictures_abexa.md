  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ICF - Internet Communication Framework](javascript:call_link\('abenicf.htm'\)) →  [ICF Examples](javascript:call_link\('abenicf_abexas.htm'\)) → 

Accessing the MIME Repository Using ICF

This example demonstrates how the MIME repository is accessed using a HTTP service in [ICF](javascript:call_link\('abenicf_glosry.htm'\) "Glossary Entry").

Source Code

REPORT demo\_picture\_from\_mime.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
    CLASS-METHODS class\_constructor.
  PRIVATE SECTION.
    CLASS-DATA icf\_node TYPE string.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    IF icf\_node IS INITIAL.
      RETURN.
    ENDIF.
    cl\_demo\_output=>display\_html(
      \`<html><body><basefont face="arial">\`                &&
      \`Picture from MIME Repository<br><br>\`               &&
       \`<img src="\` && icf\_node
                    && \`/ABAP\_Docu\_Logo.gif?sap-client=\`
                    && sy-mandt
                    && \`">\`                                &&
       \`</body></html>\`  ).  ENDMETHOD.
  METHOD class\_constructor.
    CONSTANTS path TYPE string VALUE \`/sap/public/bc/abap/mime\_demo\`.
    DATA(location) =
      cl\_http\_server=>get\_location( application = path ).
    IF location IS NOT INITIAL.
      icf\_node = location && path.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

If a path to a HTTP service from ICF is constructed in the same way in transaction SICF as the path to a MIME repository node and the handler class CL\_HTTP\_EXT\_WEBDAV\_PUBLIC is assigned to the service, the service can be used to access the MIME objects of this node directly.

The example contains the node /sap/public/bc/abap/mime\_demo in both the transaction SICF and in the MIME repository. The image ABAP\_Docu\_Logo.gif is saved in the MIME repository under this node. The handler class CL\_HTTP\_EXT\_WEBDAV\_PUBLIC is assigned to the ICF node. The name of the image can be added to the URL of the service and used to access the image directly.

See also the [executable example](javascript:call_link\('abenmime_pictures_abexa.htm'\)) for accessing objects from the MIME repository using the associated API.