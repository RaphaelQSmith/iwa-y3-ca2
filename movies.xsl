<?xml version="1.0"?>

<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <table id="menuTable" class="thead-#EAE7DC table-hover col-lg-12" >
            <thead>
                <tr bgcolor="#d8c3a5">
                    <th></th>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Genre</th>
                    <th>Main Cast</th>
                </tr>
            </thead>
              <tbody>
                <xsl:for-each select="movielist/movie">
                    <tr id="{position()}">
                        <td align="center"><input name="item0" type="checkbox" /></td>
                        <td><xsl:value-of select="title"/></td>
                        <td><xsl:value-of select="year"/></td>
                        <td><xsl:value-of select="genre"/></td>
                        <td><xsl:value-of select="cast"/></td>
                    </tr>
                </xsl:for-each>
              </tbody>
            </table>
    </xsl:template>
</xsl:stylesheet>