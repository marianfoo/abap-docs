  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (LDB, Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [LDB - Examples](javascript:call_link\('abenldb_examples.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LDB%20-%20Linkage%20with%20a%20Program%2C%20ABENREPORT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LDB - Linkage with a Program

This example demonstrates how a logical database is linked with an executable program.

Source Code   

REPORT demo\_report.
NODES: spfli, sflight, sbook.
DATA: weight       TYPE p LENGTH 8 DECIMALS 4,
      total\_weight TYPE p LENGTH 8 DECIMALS 4.
INITIALIZATION.
  carrid-sign = 'I'.
  carrid-option = 'EQ'.
  carrid-low = 'AA'.
  carrid-high = 'LH'.
  APPEND carrid TO carrid.
START-OF-SELECTION.
  WRITE 'Luggage weight of flights'.
GET spfli FIELDS carrid connid cityfrom cityto.
  SKIP.
  ULINE.
  WRITE: / 'Carrid:', spfli-carrid,
           'Connid:', spfli-connid,
         / 'From:  ', spfli-cityfrom,
           'To:    ', spfli-cityto.
  ULINE.
GET sflight FIELDS fldate.
  SKIP.
  WRITE: / 'Date:', sflight-fldate.
GET sbook FIELDS luggweight.
  weight += sbook-luggweight.
GET sflight LATE FIELDS carrid .
  WRITE: / 'Luggage weight =', weight.
  total\_weight += weight.
  weight = 0.
END-OF-SELECTION.
  ULINE.
  WRITE: / 'Sum of luggage weights =', total\_weight.

Description   

This example shows a typical report where the [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") F1S is assigned to its properties.