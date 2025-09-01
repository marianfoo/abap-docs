  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and Operating System Statements](javascript:call_link\('abenabap_system_commands.htm'\)) → 

Operating System Statements of the Presentation Server

The method EXECUTE of the class [CL\_GUI\_FRONTEND\_SERVICES](javascript:call_link\('abenfrontend_services.htm'\)) can be used to call operating system statements of the presentation server. The prerequisite is that the current ABAP program is executed in [dialog processing](javascript:call_link\('abendialog_processing_glosry.htm'\) "Glossary Entry") and from SAP GUI.

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