---
title: "Switch Spooling On and Off"
description: |
  As long as spooling is switched off, all list output is written to the list buffer for the current screen list. When spooling is switched on, a spool list is created. You can switch on spooling as follows: -   Use statement NEW-PAGE PRINT ON(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_on_off.htm"
abapFile: "abenprint_on_off.htm"
keywords: ["select", "do", "if", "try", "class", "data", "abenprint", "off"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpro_list.htm) →  [Spooling Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint.htm) → 

Switch Spooling On and Off

As long as spooling is switched off, all list output is written to the list buffer for the current screen list. When spooling is switched on, a spool list is created. You can switch on spooling as follows:

-   Use statement [NEW-PAGE PRINT ON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapnew-page_print.htm).

-   Choose function Execute + Print on the [standard selection screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_selscreen_glosry.htm "Glossary Entry") of an executable program.

-   Call an executable program with the addition [TO SAP-SPOOL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit_list_options.htm) of statement [SUBMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit.htm).

-   Schedule an executable program in a background job using the additions [VIA JOB](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit_via_job.htm) and [TO SAP-SPOOL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit_list_options.htm) of statement [SUBMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit.htm).

When using NEW-PAGE PRINT ON, spooling is explicitly switched on in the program. With the other three options, spooling is switched on from the beginning of executing an executable program. Switching on spooling opens a new [spool list level](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_list_level_glosry.htm "Glossary Entry").

Only the spooling switched on with NEW-PAGE PRINT ON can be switched off again using NEW-PAGE PRINT OFF. Spooling that is switched on at the start of a program, cannot be switched off within this same program. In particular, spooling is always switched on when executing a program in [background processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbackround_processing_glosry.htm "Glossary Entry").

Examples

Explicitly switching on spooling

DATA: params TYPE pri\_params,
      valid  TYPE c.
CALL FUNCTION 'GET\_PRINT\_PARAMETERS'
  IMPORTING out\_parameters        = params
            valid                 = valid.
IF valid <> space.
  NEW-PAGE PRINT ON PARAMETERS params NO DIALOG.
  WRITE / ...
  NEW-PAGE PRINT OFF.
ENDIF.

Switching optical archiving on explicitly

DATA: pri\_params TYPE pri\_params,
      arc\_params TYPE arc\_params,
      valid  TYPE c.
CALL FUNCTION 'GET\_PRINT\_PARAMETERS'
  IMPORTING out\_parameters         = pri\_params
            out\_archive\_parameters = arc\_params
            valid                 = valid.
IF valid <> space.
  NEW-PAGE PRINT ON PARAMETERS         pri\_params
                    ARCHIVE PARAMETERS arc\_params NO DIALOG.
  PRINT-CONTROL INDEX-LINE '   '.
  WRITE / ....
  NEW-PAGE PRINT OFF.
ENDIF.

Program call

DATA: params TYPE pri\_params,
      valid  TYPE c.
CALL FUNCTION 'GET\_PRINT\_PARAMETERS'
  IMPORTING out\_parameters        = params
            valid                 = valid.
IF valid <> space.
  SUBMIT myreport TO SAP-SPOOL WITHOUT SPOOL DYNPRO
                  SPOOL PARAMETERS params.
ENDIF.

Scheduling a background job

DATA: params TYPE pri\_params,
      valid  TYPE c.
CALL FUNCTION 'GET\_PRINT\_PARAMETERS'
  EXPORTING mode                  = 'BATCH'
            report                = 'MYREPORT'
  IMPORTING out\_parameters        = params
            valid                 = valid.
IF valid <> space.
  CALL FUNCTION 'JOB\_OPEN' ....  EXPORTING jobcount ...
  SUBMIT myreport VIA JOB 'MY\_JOB' NUMBER jobcount
         TO SAP-SPOOL WITHOUT SPOOL DYNPRO
            SPOOL PARAMETERS params.
  CALL FUNCTION 'JOB\_CLOSE' ...
ENDIF.