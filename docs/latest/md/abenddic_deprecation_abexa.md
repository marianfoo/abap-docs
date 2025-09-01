  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) →  [DDIC - Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_sema.htm) →  [DDIC - Table-Specific Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_semasspec.htm) →  [DDIC - Foreign Key Dependencies](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkeyrel.htm) →  [DDIC - Flagging of Deprecated Data in Check Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_deprecation.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Flagging%20of%20Deprecated%20Data%20in%20Check%20Tables%2C%20ABENDDIC_DEPRECATION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

DDIC - Flagging of Deprecated Data in Check Tables

This example demonstrates [how deprecated data is flagged in check tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_deprecation.htm).

Source Code   

REPORT demo\_dynpro\_deprecation.
TABLES demo\_depr\_struc.
DATA depr\_flag TYPE abap\_bool VALUE 'X'.
START-OF-SELECTION.
  CALL SCREEN 100.
LOAD-OF-PROGRAM.
  depr\_flag = cl\_configuration\_deprecation=>deprecation\_is\_active( ).
  DATA ls\_target TYPE demo\_depr\_check1.
  SELECT planetype
         FROM saplane
         ORDER BY planetype
         INTO TABLE @FINAL(planetypes).
  DELETE FROM demo\_depr\_check1.
  INSERT demo\_depr\_check1 FROM TABLE @( VALUE #(
      FOR wa IN planetypes INDEX INTO idx
      ( planetype = wa-planetype
        configdeprecationcode =
          COND #( WHEN idx <= 3 THEN 'W'
                  WHEN idx BETWEEN 4 AND 6 THEN 'E'
                  ELSE ' ' ) ) ) ).
MODULE pbo\_100 OUTPUT.
  SET PF-STATUS 'STATUS\_100'.
  cl\_configuration\_deprecation=>set\_deprecation\_active(
    i\_respect\_obsolete\_values = depr\_flag ).
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.

Description   

This example uses the check table DEMO\_DEPR\_CHECK for the flagging of deprecated entries. The ABAP program flags the first three table entries as deprecated. The next three table entries are flagged as invalid.

When the ABAP program is executed, the consumer can enable or disable the deprecated data check via the [checkbox](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheckbox_glosry.htm "Glossary Entry") Check deprecated data. This affects the input check and input help.

If checks on deprecated data are enabled, the following takes place:

-   A warning occurs if one of the deprecated values is entered. If one of the invalid values is entered, an error message occurs and the entered value is not accepted.
-   The input help displays valid values and deprecated values only and no invalid values.

If the checkbox Check deprecated data is not selected, no warnings or error messages are produced and the input help displays all entries from the check table DEMO\_DEPR\_CHECK.