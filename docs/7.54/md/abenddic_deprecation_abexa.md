  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [Semantic Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [Table-Specific Semantic Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) →  [Foreign Key Dependencies](javascript:call_link\('abenddic_database_tables_forkeyrel.htm'\)) →  [Flagging of Obsolete Data in Check Tables](javascript:call_link\('abenddic_deprecation.htm'\)) → 

Flagging of Deprecated Data in Check Tables

This example demonstrates [how deprecated data is flagged in check tables](javascript:call_link\('abenddic_deprecation.htm'\)).

Source Code

REPORT demo\_dynpro\_deprecation.
TABLES demo\_depr\_struc.
DATA depr\_flag TYPE abap\_bool VALUE 'X'.
START-OF-SELECTION.
  CALL SCREEN 100.
LOAD-OF-PROGRAM.
  depr\_flag = cl\_configuration\_deprecation=>deprecation\_is\_active( ).
  DATA ls\_target TYPE demo\_depr\_check.
  SELECT planetype
         FROM saplane
         ORDER BY planetype
         INTO TABLE @DATA(planetypes).
  DELETE FROM demo\_depr\_check.
  INSERT demo\_depr\_check FROM TABLE @( VALUE #(
      FOR wa IN planetypes INDEX INTO idx
      ( planetype = wa-planetype
        configurationdeprecationcode =
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

This example uses the check table DEMO\_DEPR\_CHECK for the flagging of deprecated entries and the first three table entries are flagged as deprecated. The next three table entries are flagged as invalid.

This example makes it possible to define how deprecated data is checked. The [checkbox](javascript:call_link\('abencheckbox_glosry.htm'\) "Glossary Entry") Check deprecated data enables or disables checks on deprecated data and hence defines the input check and input help.

If checks on deprecated data are enabled, the following takes place:

-   A warning is displayed if one of the deprecated values is entered. If one of the invalid values is entered, an error message is displayed and the entered value is not accepted.

-   The input help displays valid values and deprecated values only and no invalid values.

If the checkbox Check deprecated data is not selected, there are no warnings or error messages and the input help displays all entries from the check table DEMO\_DEPR\_CHECK.