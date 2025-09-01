---
title: "SUMMING"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsumming_shortref.htm) Obsolete Syntax SUMMING dobj. Effect For every WRITE(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite-.htm) statement that after executing the statement SUMMING, whi
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsumming.htm"
abapFile: "abapsumming.htm"
keywords: ["select", "do", "if", "try", "catch", "class", "data", "abapsumming"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengui_obsolete.htm) →  [Obsolete Statements in List Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlists_obsolete.htm) →  [Obsolete Calculations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculate_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SUMMING%2C%20ABAPSUMMING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SUMMING

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsumming_shortref.htm)

Obsolete Syntax

SUMMING dobj.

Effect

For every [WRITE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite-.htm) statement that after executing the statement SUMMING, which is forbidden in classes, writes the content of data object dobj onto a list of any list level, the total of all values of dobj output with WRITE since the execution of SUMMING is determined implicitly and assigned to a data object sum\_dobj.

The statement SUMMING declares the global data object sum\_dobj with the same type as dobj. [Numeric data objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumeric_data_object_glosry.htm "Glossary Entry") can be specified for dobj. The statement SUMMING can be executed only once in a program. It can be specified within a [procedure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocedure_glosry.htm "Glossary Entry"), but the declared data object sum\_dobj is not local.

If the content of dobj in a WRITE statement cannot be interpreted as a number or the addition produces an overflow after the statement SUMMING is executed, an uncatchable exception is raised.

Hint

This statement is not allowed in classes because it works with implicitly created global variables. Instead, explicit [calculations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompute_expressions.htm) can be made.

Example

Implicit determination of minimum, maximum and total of a list of flight distances.

PARAMETERS p\_carrid TYPE spfli-carrid.
DATA spfli\_wa TYPE spfli.
MINIMUM spfli\_wa-distance.
MAXIMUM spfli\_wa-distance.
SUMMING spfli\_wa-distance.
SELECT carrid, connid, distance
       FROM spfli
       WHERE carrid = @p\_carrid
       INTO CORRESPONDING FIELDS OF @spfli\_wa.
  WRITE: / spfli\_wa-carrid, spfli\_wa-connid,
           spfli\_wa-distance.
ENDSELECT.
ULINE.
WRITE: min\_spfli\_wa-distance,
       max\_spfli\_wa-distance,
       sum\_spfli\_wa-distance.

The program produces a syntax check warning because the names of the data objects declared using MINIMUM, MAXIMUM and SUMMING contain the invalid \- character.

Without using the implicit statements MINIMUM, MAXIMUM and SUMMING, the same result can be achieved using explicitly calculated help fields.

PARAMETERS p\_carrid TYPE spfli-carrid.
DATA: spfli\_wa TYPE spfli,
      min\_distance TYPE spfli-distance VALUE +99999,
      max\_distance TYPE spfli-distance VALUE -99999,
      sum\_distance TYPE spfli-distance.
SELECT carrid, connid, distance
       FROM spfli
       WHERE carrid = @p\_carrid
       INTO CORRESPONDING FIELDS OF @spfli\_wa.
  WRITE: / spfli\_wa-carrid, spfli\_wa-connid,
           spfli\_wa-distance.
  IF spfli\_wa-distance < min\_distance.
    min\_distance = spfli\_wa-distance.
  ENDIF.
  IF spfli\_wa-distance > max\_distance.
    max\_distance = spfli\_wa-distance.
  ENDIF.
  sum\_distance += spfli\_wa-distance.
ENDSELECT.
ULINE.
WRITE: min\_distance,
       max\_distance,
       sum\_distance.