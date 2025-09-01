  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and Operating System Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_system_commands.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Operating System Statements of the Presentation Server, ABENABAP_SYSTEM_COMMANDS_PRES
, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Operating System Statements of the Presentation Server

The method EXECUTE of the class [CL\_GUI\_FRONTEND\_SERVICES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfrontend_services.htm) can be used to call operating system statements of the presentation server. The prerequisite is that the current ABAP program is executed in [dialog processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendialog_processing_glosry.htm "Glossary Entry") and from SAP GUI.

Hint

The method EXECUTE of the class CL\_GUI\_FRONTEND\_SERVICES replaces the obsolete function module WS\_EXECUTE.

Example

Call of the command line window in MS Windows.

cl\_gui\_frontend\_services=>execute(
   EXPORTING
     application           = 'cmd.exe'
    default\_directory      = 'C:\\'
  EXCEPTIONS
    cntl\_error             = 1
    error\_no\_gui           = 2
    bad\_parameter          = 3
    file\_not\_found         = 4
    path\_not\_found         = 5
    file\_extension\_unknown = 6
    error\_execute\_failed   = 7
    synchronous\_failed     = 8
    not\_supported\_by\_gui   = 9
    OTHERS = 10 ).
IF sy-subrc <> 0.
  ...
ENDIF.