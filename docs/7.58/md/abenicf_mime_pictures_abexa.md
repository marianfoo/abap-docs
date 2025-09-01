  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [Internet Communication Framework (ICF)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenicf.htm) →  [ICF - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenicf_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ICF%20-%20Accessing%20the%20MIME%20Repository%20Using%20ICF%2C%20ABENICF_MIME_PICTURES_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

ICF - Accessing the MIME Repository Using ICF

This example demonstrates how the MIME repository is accessed using a HTTP service in [ICF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenicf_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_picture\_from\_mime DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA icf\_node TYPE string.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_picture\_from\_mime IMPLEMENTATION.
  METHOD main.
    IF icf\_node IS INITIAL.
      RETURN.
    ENDIF.
    out->write\_html(
      \`<html><body><basefont face="arial">\`                &&
      \`Picture from MIME Repository<br><br>\`               &&
       \`<img src="\` && icf\_node
                    && \`/ABAP\_Docu\_Logo.gif?sap-client=\`
                    && sy-mandt
                    && \`">\`                                &&
       \`</body></html>\`  ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    CONSTANTS path TYPE string VALUE \`/sap/public/bc/abap/mime\_demo\`.
    FINAL(location) =
      cl\_http\_server=>get\_location( application = path ).
    IF location IS NOT INITIAL.
      icf\_node = location && path.
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

If a path to a HTTP service from ICF is constructed in the same way in transaction SICF as the path to a MIME repository node and the handler class CL\_HTTP\_EXT\_WEBDAV\_PUBLIC is assigned to the service, the service can be used to access the MIME objects of this node directly.

The example contains the node /sap/public/bc/abap/mime\_demo in both the transaction SICF and in the MIME repository. The image ABAP\_Docu\_Logo.gif is saved in the MIME repository under this node. The handler class CL\_HTTP\_EXT\_WEBDAV\_PUBLIC is assigned to the ICF node. The name of the image can be added to the URL of the service and used to access the image directly.

See also the [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmime_pictures_abexa.htm) for accessing objects from the MIME repository using the associated API.